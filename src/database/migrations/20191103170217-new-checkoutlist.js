module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('checkout_lists', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: Sequelize.INTEGER,
      references: { model: 'products', key: 'id' },
      allowNull: false,
    },
    checkout_id: {
      type: Sequelize.INTEGER,
      references: { model: 'checkouts', key: 'id' },
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
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
  }),

  down: (queryInterface) => queryInterface.dropTable('checkout_lists'),
};
