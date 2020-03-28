import Sequelize, { Model } from 'sequelize';

class Checkout extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
        fee: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Checkout;

// id
// amount
// feee
// create_at
// update_at

// tabela de relacoa
/*
checkout_product
id, product_id, checkout_id, create_at, update_at, amount, total


checkou_produtc
checkout
creadt_cards
products
stocks
transactions


*/
