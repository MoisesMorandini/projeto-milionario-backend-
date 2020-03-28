module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_adddress', {
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
      unique: true,
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
      allowNull: true,
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
    create_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    update_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('user_address'),
};
