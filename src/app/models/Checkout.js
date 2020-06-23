import Sequelize, { Model } from 'sequelize';

class Checkout extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.UserAddress, {
      foreignKey: 'user_address_id',
      as: 'user_address',
    });
  }
}

export default Checkout;
