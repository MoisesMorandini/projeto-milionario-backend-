require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    require: true,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
