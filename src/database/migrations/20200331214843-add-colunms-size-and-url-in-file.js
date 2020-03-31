module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('files', 'size', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn('files', 'url', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
  down: queryInterface => {
    return Promise.all([
      queryInterface.removeColumn('files', 'size'),
      queryInterface.removeColumn('files', 'url'),
    ]);
  },
};
