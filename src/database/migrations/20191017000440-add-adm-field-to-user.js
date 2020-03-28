module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'administrator', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'administrator');
  },
};
