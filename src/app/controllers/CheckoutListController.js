/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import * as Yup from 'yup';
import { Sequelize } from 'sequelize';
import CheckoutList from '../models/CheckoutList';
import Checkout from '../models/Checkout';
import Product from '../models/Product';
import File from '../models/File';

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
            include: [{ model: File, as: 'file', attributes: ['url'] }],
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
