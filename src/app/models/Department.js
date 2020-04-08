import Sequelize, { Model } from 'sequelize';

class Department extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Categorie, {
      foreignKey: 'department_id',
      as: 'category',
    });
  }
}

export default Department;
