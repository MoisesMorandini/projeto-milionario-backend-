import { Model, Sequelize } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        checkout_id: Sequelize.INTEGER,
        transaction_id: Sequelize.INTEGER,
        status: Sequelize.STRING,
        authorization_code: Sequelize.STRING,
        brand: Sequelize.STRING,
        authorized_amount: Sequelize.INTEGER,
        tid: Sequelize.INTEGER,
        installments: Sequelize.INTEGER,
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
