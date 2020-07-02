import paypal from 'paypal-rest-sdk';
import Product from '../models/Product';
import paypalConfig from '../../config/paypal';
import Checkout from '../models/Checkout';
import CheckoutList from '../models/CheckoutList';
import Transaction from '../models/Transaction';
import UserAddress from '../models/UserAddress';

class PaymentController {
  async buy(req, res) {
    const { cart, userAddress: pkUserAddres } = req.body;
    const products = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cart.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const prod = await Product.findByPk(cart[i].id);

      if (!prod) return res.status(400).json({ error: 'Product not found' });
      products.push({
        id: prod.id,
        name: prod.name,
        description: prod.description,
        price: prod.price,
        amount: cart[i].amount,
      });
    }
    const produtsJson = [];
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.price;
      produtsJson.push(`
      {
        "name": "${product.name}",
        "sku": "${product.description}",
        "price": "${product.price}.00",
        "currency": "BRL",
        "quantity": ${product.amount}
      }`);
    });
    let allProdutsJson = '';
    for (let i = 0; i < produtsJson.length; i++) {
      allProdutsJson = `${allProdutsJson + produtsJson[i]},`;
    }
    allProdutsJson = allProdutsJson.substring(0, allProdutsJson.length - 1);

    const stringRequest = `{
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
        "return_url": "http://localhost:3000/users/checkout/success",
        "cancel_url": "http://localhost:3000/users/checkout/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [${allProdutsJson}]
          },
          "amount": {
              "currency": "BRL",
              "total": "${totalPrice}.00"
          },
          "description": "Compra de produtos."
      }]
    }`;
    const jsonRequest = JSON.parse(stringRequest);
    const userAddress = await UserAddress.findByPk(pkUserAddres);
    if (!userAddress)
      return res.status(400).json({ error: 'User Address not found' });
    paypal.configure(paypalConfig);

    await paypal.payment.create(jsonRequest, (err, payment) => {
      if (err) {
        return res.status(400).json({ error: 'Failed checkout' });
      }
      const user_id = req.userId;
      payment.links.forEach(async link => {
        if (link.rel === 'approval_url') {
          const { transactions } = payment;
          transactions.forEach(async transaction => {
            const checkout = await Checkout.create({
              id: payment.id,
              user_id,
              user_address_id: userAddress.id,
              amount: transaction.amount.total.substring(
                0,
                transaction.amount.total.length - 3
              ),
            });
            const { item_list } = transaction;
            item_list.items.forEach(async item => {
              const prodCheckout = products.find(
                prod => prod.name === item.name
              );
              await CheckoutList.create({
                user_id,
                product_id: prodCheckout.id,
                checkout_id: checkout.id,
                total: prodCheckout.price * prodCheckout.amount,
                amount: prodCheckout.amount,
              });
            });
          });
          return res.status(201).json(link.href);
        }
      });
    });
  }

  async success(req, res) {
    const { PayerID, paymentId } = req.query;
    const { total } = req.body;

    const execute_payment_json = `{
      "payer_id": "${PayerID}",
      "transactions": [{
        "amount": {
          "currency": "BRL",
          "total": "${total}.00"
        }
      }]
    }`;

    paypal.configure(paypalConfig);
    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async (error, payment) => {
        if (error) {
          return res.status(400).json({ error: 'Failed trasaction' });
        }
        await Transaction.create({
          checkout_id: payment.id,
          status: payment.state,
          email: payment.payer.payer_info.email,
        });
        return res.status(201).json({ msg: 'Success trasaction' });
      }
    );
  }
}

export default new PaymentController();
