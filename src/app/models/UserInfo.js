import { Model, Sequelize } from 'sequelize';

class UserInfo extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        first_ddd: Sequelize.STRING,
        first_one: Sequelize.INTEGER,
        segund_one: Sequelize.INTEGER,
        second_ddd: Sequelize.STRING,
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

export default UserInfo;
