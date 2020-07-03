/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { Sequelize } from 'sequelize';
import Transaction from '../models/Transaction';
// import Product from '../models/Product';
// import File from '../models/File';
import Checkout from '../models/Checkout';
import CheckoutList from '../models/CheckoutList';
import Product from '../models/Product';
import File from '../models/File';
import FileProduct from '../models/FileProduct';

class TransactionController {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;
    let { name } = req.query;
    const { Op } = Sequelize;

    if (name === undefined) name = '';

    const transactions = await Transaction.findAll({
      offset: (page - 1) * limit,
      limit,
      where: {
        status: { [Op.iLike]: `%approved%` },
      },
      include: [
        {
          model: Checkout,
          as: 'checkout',
        },
      ],
      order: [['created_at', 'DESC']],
    });

    if (!transactions) return res.status(204).json();

    const checkouts = [];

    for (let i = 0; i < transactions.length; i++) {
      const id = transactions[i].checkout_id;

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

      checkouts.push({
        transaction: transactions[i],
        checkoutList,
      });
    }

    return res.status(200).json(checkouts);
  }
}

export default new TransactionController();
