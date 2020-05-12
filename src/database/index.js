import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Department from '../app/models/Department';
import Categorie from '../app/models/Categorie';
import Product from '../app/models/Product';
import UserInfo from '../app/models/UserInfo';
import UserAddress from '../app/models/UserAddress';
import Transaction from '../app/models/Transaction';
import Checkout from '../app/models/Checkout';
import CheckoutList from '../app/models/CheckoutList';
import TechnicalSpecification from '../app/models/TechnicalSpecification';

import databaseConfig from '../config/database02';

const models = [
  User,
  File,
  Department,
  Categorie,
  Product,
  Checkout,
  CheckoutList,
  Transaction,
  UserInfo,
  UserAddress,
  TechnicalSpecification,
];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // this.connection = new Sequelize('postgres://szbnffpjiwqfnm:a04483d07395ab669c4fdab24a8cb83a5bd820dbcaceabe089f01d44a80ba724@ec2-3-234-169-147.compute-1.amazonaws.com:5432/d6rh5396thpsj?ssl=true');
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new DataBase();
