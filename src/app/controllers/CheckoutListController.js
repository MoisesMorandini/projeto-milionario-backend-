import Product from '../models/Product';
import File from '../models/File';
import Checkout from '../models/Checkout';
import CheckoutList from '../models/CheckoutList';

class CheckoutListController {
  async index(req, res) {
    const checkouts = await Checkout.findAll({
      attributes: ['id', 'amount', 'fee'],
    });
    if (!checkouts)
      return res
        .status(400)
        .json({ error: "This user doens't have a checkout" });

    // const checkoutList = await CheckoutList.findAll();
    const checkoutList = await Promise.all(
      checkouts.map(checkout =>
        CheckoutList.findAll({
          where: {
            checkout_id: checkout.id,
          },
          attributes: ['id', 'amount', 'total', 'checkout_id', 'product_id'],
          include: [
            {
              model: Checkout,
              as: 'checkout',
              attributes: ['id', 'amount', 'fee'],
            },
            {
              model: Product,
              as: 'product',
              attributes: ['id', 'name', 'file_id'],
              include: [
                {
                  model: File,
                  as: 'file',
                  attributes: ['name', 'path', 'url'],
                },
              ],
            },
          ],
        })
      )
    );
    return res.status(200).json(checkoutList);
  }

  async findByUser(req, res) {
    const checkouts = await Checkout.findAll({
      where: {
        user_id: req.params.id,
      },
      attributes: ['id'],
    });
    if (!checkouts)
      return res
        .status(400)
        .json({ error: "This user doens't have a checkout" });

    const checkoutList = await Promise.all(
      checkouts.map(checkout =>
        CheckoutList.findAll({
          where: {
            checkout_id: checkout.id,
          },
          attributes: ['id', 'amount', 'total', 'checkout_id', 'product_id'],
          include: [
            {
              model: Checkout,
              as: 'checkout',
              attributes: ['id', 'amount', 'fee'],
            },
            {
              model: Product,
              as: 'product',
              attributes: ['id', 'name', 'file_id'],
              include: [
                {
                  model: File,
                  as: 'file',
                  attributes: ['name', 'path', 'url'],
                },
              ],
            },
          ],
        })
      )
    );
    return res.status(200).json(checkoutList);
  }
}

export default new CheckoutListController();
