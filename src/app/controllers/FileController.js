import * as Yup from 'yup';
import File from '../models/File';
import FileProduct from '../models/FileProduct';

class FileController {
  async store(req, res) {
    const {
      originalname: name,
      size,
      key: path,
      location: url = '',
    } = req.file;
    const file = await File.create({
      name,
      path,
      size,
      url,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const file = await File.findByPk(req.params.id);
    if (!file) return res.status(400).json({ error: 'File not found' });
    const fileProduct = await FileProduct.findOne({
      where: {
        file_id: req.params.id,
      },
    });
    if (!fileProduct) return res.status(400).json({ error: 'File not found' });
    fileProduct.destroy();
    file.destroy();

    return res.json({ message: 'This file has been deleted' });
  }
}

export default new FileController();
