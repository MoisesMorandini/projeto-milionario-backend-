module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_addresses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      street_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(30),
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
  down: queryInterface => queryInterface.dropTable('user_addresses'),
};
