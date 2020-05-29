import * as Yup from 'yup';
import Banner from '../models/Banner';
import File from '../models/File';

class BannerController {
  async index(req, res) {
    const banners = await Banner.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['name', 'path', 'url'],
        },
      ],
      order: ['id'],
    });

    if (!banners)
      return res.status(400).json({ error: 'Error finding for banners.' });

    if (banners.length === 0)
      return res.status(204).json({ error: 'Banners not found' });

    return res.status(200).json(banners);
  }

  async findById(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const banner = await Banner.findByPk(req.params.id, {
      attributes: ['id', 'name'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    if (!banner) {
      return res.status(400).json({ error: 'Fails find banner.' });
    }
    return res.status(200).json(banner);
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

    const { name, file_id } = req.body;

    const isRegistered = await Banner.findOne({
      where: {
        name,
      },
    });

    if (isRegistered) {
      return res
        .status(400)
        .json({ error: 'Repeated banner is not permitted' });
    }

    const banner = await Banner.create({
      name,
      file_id,
    });

    return res.status(200).json(banner);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number(),
      name: Yup.string().max(50),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const banner = await Banner.findByPk(req.params.id);

    if (!banner) return res.status(400).json({ error: 'Banner not found' });

    const bannerUpdated = await banner.update(req.body);

    return res.status(200).json(bannerUpdated);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const banner = await Banner.findByPk(req.params.id);

    if (!banner) return res.status(400).json({ error: 'Banner not found' });

    banner.destroy();

    return res.json({ message: 'This banner has been deleted' });
  }
}

export default new BannerController();
