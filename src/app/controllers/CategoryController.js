import * as Yup from 'yup';
import Category from '../models/Categorie';

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(categories);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(50),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name } = req.body;

    if (!isNaN(name)) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const find = await Category.findOne({
      where: {
        name,
      },
    });

    if (find) {
      return res.status(400).json({ mess: 'Repeated category is not permitted' });
    }

    const category = await Category.create(req.body);

    return res.json(category);
  }
}

export default new CategoryController();
