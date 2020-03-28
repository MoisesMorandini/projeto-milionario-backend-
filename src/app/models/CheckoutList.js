import Sequelize, { Model } from 'sequelize';

class CheckoutList extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    this.belongsTo(models.Checkout, { foreignKey: 'checkout_id', as: 'checkout' });
  }
}

export default CheckoutList;
