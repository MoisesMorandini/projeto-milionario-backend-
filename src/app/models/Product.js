import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        stock: Sequelize.INTEGER,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Categorie, {
      foreignKey: 'category_id',
      as: 'category',
    });
    this.hasMany(models.TechnicalSpecification, {
      foreignKey: 'product_id',
      as: 'technical_specifications',
    });

    this.hasMany(models.FileProduct, {
      foreignKey: 'product_id',
      as: 'file_products',
    });
  }
}

export default Product;
