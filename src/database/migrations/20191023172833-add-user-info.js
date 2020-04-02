module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_info', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      first_ddd: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      first_phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      second_ddd: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      second_phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('user_info');
  },
};
