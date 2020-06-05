import * as Yup from 'yup';
import UserAddress from '../models/UserAddress';

function schemaDefault() {
  return Yup.object().shape({
    street: Yup.string()
      .required()
      .max(50),
    street_number: Yup.number().required(),
    complement: Yup.string().max(50),
    zipcode: Yup.string()
      .required()
      .min(8)
      .max(8),
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
}

class UserAdressController {
  async store(req, res) {
    const schema = schemaDefault();
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    let user_id = req.userId;
    if (!user_id) user_id = 1;

    const {
      zipcode,
      street,
      street_number,
      complement,
      neighborhood,
      city,
      state,
    } = req.body;

    const address = await UserAddress.create({
      user_id,
      zipcode,
      street,
      street_number,
      complement,
      neighborhood,
      city,
      state,
    });

    return res.json(address);
  }

  async findByUserId(req, res) {
    let { userId } = req;
    const { page = 1, limit = 20 } = req.query;
    if (!userId) userId = 1;

    const { count, rows: userAdrresses } = await UserAddress.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
      where: {
        user_id: userId,
      },
      attributes: [
        'id',
        'zipcode',
        'street',
        'street_number',
        'complement',
        'neighborhood',
        'city',
        'state',
      ],
    });

    res.header('X_Total_Count', count);
    if (count === 0) return res.status(204).json();

    return res.status(200).json(userAdrresses);
  }

  async update(req, res) {
    const schema = schemaDefault();
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }
    let user_id = req.userId;
    if (!user_id) user_id = 1;
    const userAddress = await UserAddress.findOne({
      where: {
        id: req.params.id,
        user_id,
      },
    });

    if (!userAddress)
      return res.status(400).json({ error: 'Address not found' });

    const newUserAddress = await userAddress.update(req.body);
    return res.status(200).json(newUserAddress);
  }

  async delete(req, res) {
    let user_id = req.userId;
    if (!user_id) user_id = 1;
    const userAddress = await UserAddress.findOne({
      where: {
        id: req.params.id,
        user_id,
      },
    });
    if (!userAddress)
      return res.status(400).json({
        error: 'Address not found',
      });

    userAddress.destroy();

    return res.json();
  }
}

export default new UserAdressController();
