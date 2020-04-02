import * as Yup from 'yup';
import Department from '../models/Department';

class DepartmentController {
  async index(req, res) {
    const departments = await Department.findAll({
      attributes: ['id', 'name'],
    });
    if (!departments)
      return res.status(400).json({ error: 'Searching department failed' });
    if (!departments.length)
      return res.status(204).json({ mess: 'Departments not found' });
    return res.json(departments);
  }

  async findById(req, res) {
    const { id } = req.params;
    const deparment = await Department.findByPk(id, {
      attributes: ['id', 'name'],
    });

    if (!deparment)
      return res.status(400).json({ error: 'Searching department failed' });

    return res.status(200).json(deparment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(51),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { name } = req.body;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name)) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const find = await Department.findOne({
      where: {
        name,
      },
    });

    if (find)
      return res
        .status(400)
        .json({ mess: 'Repeated deparments is not permitted' });

    const department = await Department.create({ name });

    return res.json(department);
  }

  async delete(req, res) {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department)
      return res.status(400).json({ mess: 'Department not found' });

    await department.destroy().catch(() => {
      return res.status(400).json({ mess: 'Failed to delete Department' });
    });

    return res.status(200).json({ mess: 'Department has been deleted' });
  }
}

export default new DepartmentController();
