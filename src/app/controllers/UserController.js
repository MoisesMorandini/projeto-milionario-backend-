import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import UserInfo from '../models/UserInfo';
import authConfig from '../../config/auth';

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

  async update(req, res) {
    const schemaYup = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      newPassword: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('newPassword', (newPassword, field) =>
        newPassword ? field.required().oneOf([Yup.ref('newPassword')]) : field
      ),
    });

    if (!(await schemaYup.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, administrator } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      administrator,
    });
  }
}

export default new UserController();
