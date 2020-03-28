import * as Yup from 'yup';
import UserAddress from '../models/UserAddress';

class UserAdressController {
  async store(req, res) {
    const schema = Yup.object().shape({
      zipcode: Yup.string()
        .required()
        .min(8)
        .max(8),
      street: Yup.string()
        .required()
        .max(50),
      streetNumber: Yup.number(),
      complement: Yup.string().max(50),
      neighborhood: Yup.string()
        .required()
        .max(30),
      city: Yup.string()
        .required()
        .max(30),
      state: Yup.string()
        .required()
        .max(30),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { userId } = req;

    const isRegistered = await UserAddress.findOne({
      where: { userId },
    });

    const {
      zipcode, street, streetNumber, complement, neighborhood, city, state,
    } = req.body;

    return null;
  }
}

export default new UserAdressController();
