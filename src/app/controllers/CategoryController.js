import * as Yup from 'yup';
import Category from '../models/Categorie';
import Department from '../models/Department';

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
      include: [
        { model: Department, as: 'department', attributes: ['id', 'name'] },
      ],
    });
    if (!categories)
      return res.status(400).json({ error: 'Searching Categories failed' });
    if (!categories.length)
      return res.status(204).json({ mess: 'Categories not found' });

    return res.json(categories);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      department_id: Yup.number().required(),
      name: Yup.string()
        .required()
        .max(50),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { name, department_id } = req.body;

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name))
      return res.status(400).json({ error: 'Validation fails' });

    const department = await Department.findByPk(department_id);

    if (!department)
      return res.status(400).json({ error: 'Department not found' });

    const find = await Category.findOne({
      where: {
        name,
      },
    });

    if (find)
      return res
        .status(400)
        .json({ mess: 'Repeated category is not permitted' });

    const category = await Category.create(req.body);

    return res.json(category);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category)
      return res.status(400).json({ err: 'Failed to delete category' });

    await category.destroy().catch(() => {
      return res.status(400).json({ err: 'Failed to delete category' });
    });
    return res.json({ mess: 'Category has been deleted' });
  }
}

export default new CategoryController();
