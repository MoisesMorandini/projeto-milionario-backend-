import { Model, Sequelize } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        checkout_id: Sequelize.INTEGER,
        status: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Checkout, {
      foreignKey: 'checkout_id',
      as: 'checkout',
    });
  }
}

export default Transaction;
