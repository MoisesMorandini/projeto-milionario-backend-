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
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
    this.hasMany(models.TechnicalSpecification, {
      foreignKey: 'product_id',
      as: 'technical_specifications',
    });
  }
}

export default Product;
