module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('checkouts', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
    }),

  down: queryInterface => queryInterface.removeColumn('checkouts', 'user_id'),
};
