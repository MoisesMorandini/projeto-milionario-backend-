import { Model, Sequelize } from 'sequelize';

class UserInfo extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        first_phone: Sequelize.STRING,
        second_phone: Sequelize.STRING,
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
