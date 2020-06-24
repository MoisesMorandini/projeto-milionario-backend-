/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
import * as Yup from 'yup';
import { Sequelize } from 'sequelize';
import Product from '../models/Product';
import Category from '../models/Categorie';
import TechnicalSpecification from '../models/TechnicalSpecification';
import File from '../models/File';
import FileProduct from '../models/FileProduct';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      category_id: Yup.number().required(),
      name: Yup.string()
        .required()
        .max(50),
      description: Yup.string()
        .required()
        .max(250),
      stock: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const category = await Category.findOne({
      where: {
        id: req.body.category_id,
      },
    });

    if (!category) return res.status(400).json({ error: 'Category invalid' });

    const { name, description, stock, price } = req.body;

    const isRegistered = await Product.findOne({
      attributes: ['name'],
      where: {
        name,
      },
    });

    if (isRegistered) {
      return res
        .status(400)
        .json({ error: 'Repeated product is not permitted' });
    }

    if(!req.body.technical_specifications_name || !req.body.technical_specifications_description ){
      return res.status(400).json({error: 'Invalid specifications technical, please insert!'});
    }

    let files = [];

    for (let i = 0; i < req.files.length; i++) {
      files.push(
        await File.create({
          name: req.files[i].originalname,
          size: req.files[i].size,
          path: req.files[i].key,
          url: req.files[i].location,
        })
      )
    }

    if (files.length === 0)
    return res.status(400).json({error: 'Invalid image, please insert image!'});

    const product = await Product.create({
      category_id: category.id,
      name,
      description,
      stock,
      price,
    });

    for (let i = 0; i < files.length; i++) {
      await FileProduct.create({
        file_id: files[i].id,
        product_id: product.id,
      });
    }

    let technical_specifications = [];

    for (let i = 0; i < req.body.technical_specifications_name.length; i++) {
      technical_specifications.push(
        await TechnicalSpecification.create({
          name: req.body.technical_specifications_name[i],
          description: req.body.technical_specifications_description[i],
          product_id: product.id,
        })
      )
    }

    let result = {
      product,
      files,
      technical_specifications
    }
    return res.status(201).json(result);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number(),
      category_id: Yup.number(),
      name: Yup.string().max(50),
      description: Yup.string().max(250),
      stock: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(400).json({ error: 'Product not found' });
    const prod = await product.update(req.body);


    return res.status(200).json(prod);

  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(400).json({ error: 'Product not found' });

    product.destroy();

    return res.json({ message: 'This product has been deleted' });
  }

  async index(req, res) {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'stock', 'price'],
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id'],
        },
        {
          model: TechnicalSpecification,
          as: 'technical_specifications',
          attributes: ['name', 'description'],
        },
        {
          model:  FileProduct,
          as: 'file_products',
          attributes: ['product_id'],
          include: [
            {
              model: File,
              as: 'file',
              attributes:['id','name', 'path', 'url']
            }
          ]
        }
      ]
    });

    if (!products)
      return res.status(400).json({ error: 'Error finding for products.' });

    if (products.length === 0)
      return res.status(204).json({ error: 'Products not found' });

    return res.status(200).json(products);
  }

  async search(req, res) {
    const { category, page = 1, limit = 20 } = req.query;
    let { name } = req.query;
    const { Op } = Sequelize;

    if (name === undefined) name = '';

    const { count, rows } = await Product.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
      where: {
        name: { [Op.like]: `%${name}%` },
        category_id:
          category === undefined
            ? {
                [Op.ne]: 0,
              }
            : category,
      },
      attributes: ['id', 'name', 'description', 'stock', 'price'],
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id'],
        },
        {
          model:  FileProduct,
          as: 'file_products',
          attributes: ['product_id'],
          include: [
            {
              model: File,
              as: 'file',
              attributes:['id','name', 'path', 'url']
            }
          ]
        },
      ],
    });

    res.header('X_Total_Count', count);

    if (count === 0) res.status(204).json();

    return res.status(200).json(rows);
  }

  async findById(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Validation fails' });

    const product = await Product.findByPk(req.params.id, {
      attributes: ['id', 'name', 'description', 'stock', 'price'],
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id'],
        },
        {
          model: TechnicalSpecification,
          as: 'technical_specifications',
          attributes: ['name', 'description'],
        },
        {
          model:  FileProduct,
          as: 'file_products',
          attributes: ['product_id'],
          include: [
            {
              model: File,
              as: 'file',
              attributes:['id','name', 'path', 'url']
            }
          ]
        }
      ],
    });
    if (!product) {
      return res.status(400).json({ error: 'Falha ao receber produto' });
    }
    return res.status(200).json(product);
  }

  async getStock(req, res) {
    const  stock  = await Product.findByPk(req.params.id, {
      attributes: ['stock'],
    });

    if (!stock) {
      return res.status(400).json({ error: 'Product not found' });
    }
    return res.status(200).json(stock);
  }
}

export default new ProductController();
