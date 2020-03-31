import File from '../models/File';

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
}

export default new FileController();
