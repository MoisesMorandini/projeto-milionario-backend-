import pagarme from 'pagarme';
import Checkout from '../models/Checkout';
import Transaction from '../models/Transaction';
import CheckoutList from '../models/CheckoutList';

class CheckoutController {
  async store(req, res) {
    const {
      address, customer, installments, card_hash, items, amount: amountClient,
    } = req.body;

    try {
      const client = await pagarme.client.connect({
        api_key: process.env.PAGARME_API_KEY,
      });

      const fee = 1000;

      const amount = amountClient * 100 + fee;

      const pagarmeTransaction = await client.transactions.create({
        amount: parseInt(amount, 10),
        card_hash,
        customer: {
          name: customer.name,
          email: customer.email,
          country: 'br',
          external_id: req.params.id,
          type: 'individual',
          documents: [
            {
              type: 'cpf',
              number: customer.cpf,
            },
            {
              type: 'rg',
              number: customer.rg,
            },
          ],
          phone_numbers: [customer.phone],
        },
        billing: {
          name: customer.name,
          address: {
            ...address,
            country: 'br',
          },
        },
        shipping: {
          name: customer.name,
          fee,
          delivery_date: '2019-07-21',
          expedited: false,
          address: {
            ...address,
            country: 'br',
          },
        },
        items: items.map((item) => ({
          id: String(item.id),
          title: item.name,
          unit_price: parseInt(item.price * 100, 10),
          quantity: item.amount,
          tangible: true,
        })),
      });

      // inserir as informações no banco de dados
      const checkout = await Checkout.create({
        user_id: req.params.id,
        amount: parseInt(amount * 100, 10),
        fee,
      });
      console.log(req.params.id);
      // adicionando produtos no checkout
      const list = await items.map((item) => {
        CheckoutList.create({
          product_id: item.id,
          checkout_id: checkout.id,
          amount: item.amount,
          total: item.price,
        });
      });
      const transactions = await Transaction.create({
        checkout_id: checkout.id,
        transaction_id: pagarmeTransaction.id,
        status: pagarmeTransaction.status,
        authorization_code: pagarmeTransaction.authorization_code,
        brand: pagarmeTransaction.card.brand,
        authorized_amount: pagarmeTransaction.authorized_amount,
        tid: pagarmeTransaction.tid,
        installments,
      });
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const checkout = await Checkout.find(id);
    await checkout.loadMany(['transaction', 'products']);

    return res.json(checkout.toJSON());
  }
}

export default new CheckoutController();
