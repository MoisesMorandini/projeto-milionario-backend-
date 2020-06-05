import * as Yup from 'yup';
import Logo from '../models/Logo';
import File from '../models/File';

class LogoController {
  async index(req, res) {
    const logo = await Logo.findAll({
      attributes: ['id', 'name', 'status'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['name', 'path', 'url'],
        },
      ],
      order: ['id'],
    });

    if (!logo)
      return res.status(400).json({ error: 'Error finding for logo.' });

    if (logo.length === 0)
      return res.status(204).json({ error: 'Logo not found' });

    return res.status(200).json(logo);
  }

  async findMain(req, res) {
    const logo = await Logo.findOne({
      attributes: ['id', 'name', 'status'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['name', 'path', 'url'],
        },
      ],
      where: {
        status: '1',
      },
      order: ['id'],
    });

    if (!logo)
      return res.status(400).json({ error: 'Error finding for logo.' });

    if (logo.length === 0)
      return res.status(204).json({ error: 'Logo not found' });

    return res.status(200).json(logo);
  }

  async findById(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const logo = await Logo.findByPk(req.params.id, {
      attributes: ['id', 'name', 'status'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    if (!logo) {
      return res.status(400).json({ error: 'Fails find logo.' });
    }
    return res.status(200).json(logo);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .max(50),
      file_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const logoWhereStatusMain = await Logo.findOne({ where: { status: '1' } });
    logoWhereStatusMain.update({ status: '0' });

    const { name, file_id } = req.body;

    const isRegistered = await Logo.findOne({
      where: {
        name,
      },
    });

    if (isRegistered) {
      return res.status(400).json({ error: 'Repeated logo is not permitted' });
    }

    const logo = await Logo.create({
      name,
      file_id,
    });

    return res.status(200).json(logo);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const logoWhereStatusMain = await Logo.findOne({ where: { status: '1' } });
    logoWhereStatusMain.update({ status: '0' });

    const logo = await Logo.findByPk(req.params.id);

    if (!logo) return res.status(400).json({ error: 'Banner not found' });

    req.body.status = '1';
    const bannerUpdated = await logo.update(req.body);

    return res.status(200).json(bannerUpdated);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const logo = await Logo.findByPk(req.params.id);

    if (!logo) return res.status(400).json({ error: 'Banner not found' });

    logo.destroy();

    return res.json({ message: 'This logo has been deleted' });
  }
}

export default new LogoController();
