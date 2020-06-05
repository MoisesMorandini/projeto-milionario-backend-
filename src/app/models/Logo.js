import Sequelize, { Model } from 'sequelize';

class Logo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        status: Sequelize.CHAR,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' });
  }
}

export default Logo;
