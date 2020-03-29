import Sequelize, { Model } from 'sequelize';

class UserAddress extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: Sequelize.STRING,
        street: Sequelize.STRING,
        street_number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associete(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user_id' });
  }
}

export default UserAddress;
