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
      order: [['name', 'ASC']],
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
    console.log(req.body);

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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(50),
      department_id: Yup.number().required(),
    });

    const schemaIsInvalid = !(await schema.isValid(req.body));
    if (schemaIsInvalid) res.status(400).json({ error: 'Validation fails' });

    const categories = await Category.findByPk(req.params.id);

    if (!categories) res.status(400).json({ error: 'Category not found' });

    const categoriesUpdated = await categories.update(req.body);

    res
      .status(200)
      .json({ mess: 'Category has been updated', data: categoriesUpdated });
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

  async findById(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      attributes: ['id', 'name'],
      include: [
        {
          model: Department,
          as: 'department',
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!category) res.status(400).json({ error: 'Searching category failed' });

    res.status(200).json(category);
  }
}

export default new CategoryController();
