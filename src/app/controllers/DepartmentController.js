import * as Yup from 'yup';
import { Sequelize } from 'sequelize';
import Department from '../models/Department';
import Category from '../models/Categorie';

class DepartmentController {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;
    let { name } = req.query;
    const { Op } = Sequelize;

    if (name === undefined) name = '';

    const { count, rows } = await Department.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      order: [['name', 'ASC']],
      attributes: ['id', 'name'],
    });
    res.header('X_Total_Count', count);

    if (count === 0) res.status(204).json();

    res.status(200).json(rows);
  }

  async getDepartmentWithCategory(req, res) {
    const departments = await Department.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });
    if (!departments)
      res.status(400).json({ error: 'Searching department failed' });
    if (!departments.length)
      res.status(204).json({ mess: 'Departments not found' });
    res.json(departments);
  }

  async findById(req, res) {
    const { id } = req.params;
    const deparment = await Department.findByPk(id, {
      attributes: ['id', 'name'],
    });

    if (!deparment)
      res.status(400).json({ error: 'Searching department failed' });

    res.status(200).json(deparment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(51),
    });

    if (!(await schema.isValid(req.body)))
      res.status(400).json({ error: 'Validation fails' });

    const { name } = req.body;

    const schemaIsInvalid = !(await schema.isValid(req.body));
    if (schemaIsInvalid) res.status(400).json({ error: 'Validation fails' });

    const find = await Department.findOne({ where: { name } });

    if (find)
      res.status(400).json({ mess: 'Repeated deparments is not permitted' });

    const department = await Department.create({ name });

    res
      .status(200)
      .json({ mess: 'Department has been stored', data: department });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(51),
    });

    const schemaIsInvalid = !(await schema.isValid(req.body));
    if (schemaIsInvalid) res.status(400).json({ error: 'Validation fails' });

    const department = await Department.findByPk(req.params.id);

    if (!department) res.status(400).json({ error: 'Product not found' });

    const departmentUpdated = await department.update(req.body);

    res
      .status(200)
      .json({ mess: 'Department has been updated', data: departmentUpdated });
  }

  async delete(req, res) {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) res.status(400).json({ mess: 'Department not found' });

    await department.destroy().catch(() => {
      res.status(400).json({ mess: 'Failed to delete Department' });
    });

    res.status(200).json({ mess: 'Department has been deleted' });
  }
}

export default new DepartmentController();
