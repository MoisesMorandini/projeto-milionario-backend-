import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import FileProduct from '../app/models/FileProduct';
import Department from '../app/models/Department';
import Categorie from '../app/models/Categorie';
import Product from '../app/models/Product';
import UserInfo from '../app/models/UserInfo';
import UserAddress from '../app/models/UserAddress';
import Transaction from '../app/models/Transaction';
import Checkout from '../app/models/Checkout';
import CheckoutList from '../app/models/CheckoutList';
import TechnicalSpecification from '../app/models/TechnicalSpecification';
import Banner from '../app/models/Banner';
import Logo from '../app/models/Logo';

import databaseConfig from '../config/database02';

const models = [
  User,
  File,
  FileProduct,
  Department,
  Categorie,
  Product,
  Checkout,
  CheckoutList,
  Transaction,
  UserInfo,
  UserAddress,
  TechnicalSpecification,
  Banner,
  Logo,
];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new DataBase();
