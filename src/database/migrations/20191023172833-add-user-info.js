module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_infos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      first_phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      second_phone: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('user_infos');
  },
};
