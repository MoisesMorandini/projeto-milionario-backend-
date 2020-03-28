require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  // host: process.env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  uri: 'postgres://szbnffpjiwqfnm:a04483d07395ab669c4fdab24a8cb83a5bd820dbcaceabe089f01d44a80ba724@ec2-3-234-169-147.compute-1.amazonaws.com:5432/d6rh5396thpsj?ssl=true',
  host: 'ec2-3-234-169-147.compute-1.amazonaws.com',
  username: 'szbnffpjiwqfnm',
  password: 'a04483d07395ab669c4fdab24a8cb83a5bd820dbcaceabe089f01d44a80ba724',
  database: 'd6rh5396thpsj',
  dialectOptions:{
    ssl:{
       require:true
    }
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
