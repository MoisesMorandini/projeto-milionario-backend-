/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import CheckoutList from '../models/CheckoutList';
import Checkout from '../models/Checkout';
import FileProduct from '../models/FileProduct';
import File from '../models/File';
import Product from '../models/Product';

class CheckoutListController {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;

    const checkouts = await Checkout.findAll({
      offset: (page - 1) * limit,
      limit,
      order: [['created_at', 'DESC']],
    });

    if (!checkouts) return res.status(204).json();

    const checkoutLists = [];

    for (let i = 0; i < checkouts.length; i++) {
      const { id } = checkouts[i];

      const checkoutList = await CheckoutList.findAll({
        where: { checkout_id: id },
        include: [
          {
            model: Product,
            as: 'product',
            attributes: ['id', 'name', 'price'],
            include: [
              {
                model: FileProduct,
                as: 'file_products',
                attributes: ['product_id', 'file_id'],
                include: [
                  {
                    model: File,
                    as: 'file',
                    attributes: ['id', 'name', 'path', 'url'],
                  },
                ],
              },
            ],
          },
        ],
      });

      checkoutLists.push({
        checkout: checkouts[i],
        checkoutList,
      });
    }

    if (checkoutLists === 0) return res.status(204).json();

    return res.status(200).json(checkoutLists);
  }
}

export default new CheckoutListController();
