/* eslint-disable no-await-in-loop */
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { Sequelize } from 'sequelize';
import User from '../models/User';
import UserInfo from '../models/UserInfo';
import authConfig from '../../config/auth';
import CheckoutList from '../models/CheckoutList';
import Checkout from '../models/Checkout';
import File from '../models/File';
import FileProduct from '../models/FileProduct';
import Product from '../models/Product';
import Transaction from '../models/Transaction';

class UserController {
  async store(req, res) {
    const schemaYup = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string()
        .required()
        .min(11)
        .max(11),
      rg: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      first_phone: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schemaYup.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (await User.findOne({ where: { email: req.body.email } })) {
      return res.status(400).json({ error: 'User e-mail already exists.' });
    }

    if (await UserInfo.findOne({ where: { cpf: req.body.cpf } })) {
      return res.status(400).json({ error: 'User CPF already exists.' });
    }

    const { id, name, email, administrator } = await User.create(req.body);

    const { cpf, rg, first_phone, second_phone } = req.body;

    await UserInfo.create({
      user_id: id,
      cpf,
      rg,
      first_phone,
      second_phone,
    });

    return res.json({
      user: {
        id,
        name,
        email,
        administrator,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async changePassword(req, res) {
    const schemaYup = Yup.object().shape({
      password: Yup.string()
        .min(6)
        .required(),
      newPassword: Yup.string()
        .min(6)
        .required(),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('newPassword'), null]),
    });

    if (!(await schemaYup.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { password, newPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!(await user.checkPassword(password)))
      return res.status(400).json({ err: 'Password not match' });

    await user.update(newPassword);

    return res.json();
  }

  async update(req, res) {
    const schemaYup = Yup.object().notRequired({
      name: Yup.string().notRequired(),
      email: Yup.string()
        .email()
        .notRequired(),
      cpf: Yup.string()
        .notRequired()
        .min(11)
        .max(11),
      rg: Yup.string().required(),
      first_phone: Yup.string()
        .notRequired()
        .min(8),
      second_phone: Yup.string()
        .notRequired()
        .min(8),
    });

    if (!(await schemaYup.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ err: 'User not found' });

    await user.update(req.body);

    await UserInfo.update(req.body, { where: { id } });

    return res.status(200).send();
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) return res.status(400).json({ err: 'User not found' });

    const userInfo = await UserInfo.findByPk(id);

    const userAccountData = {
      name: user.name,
      email: user.email,
      cpf: userInfo.cpf,
      rg: userInfo.rg,
      first_phone: userInfo.first_phone,
      second_phone: userInfo.second_phone,
    };

    return res.status(200).json(userAccountData);
  }

  async getOrders(req, res) {
    const { userId } = req;

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
          where: {
            user_id: userId,
          },
        },
      ],
      order: [['created_at', 'DESC']],
    });

    if (!transactions) return res.status(204).json();

    const checkouts = [];

    for (let i = 0; i < transactions.length; i += 1) {
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
                attributes: ['product_id'],
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

export default new UserController();
