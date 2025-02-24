import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import UserAddress from './app/controllers/UserAddressController';
import SessionController from './app/controllers/SessionControllers';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import DepartmentController from './app/controllers/DepartmentController';
import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';
import EmailController from './app/controllers/EmailController';
import BannerController from './app/controllers/BannerController';
import LogoController from './app/controllers/LogoController';
import PaymentController from './app/controllers/PaymentController';
import CheckoutListController from './app/controllers/CheckoutListController';
import TransactionController from './app/controllers/TransactionController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/forgot_password', EmailController.forgotPassword);
routes.post('/reset_password', EmailController.resetPassword);

routes.put('/users/changePassword', UserController.changePassword);

routes.get('/department', DepartmentController.index);
routes.get(
  '/department/category',
  DepartmentController.getDepartmentWithCategory
);
routes.get('/department/:id', DepartmentController.findById);

routes.get('/banner', BannerController.index);
routes.get('/banner/:id', BannerController.findById);

routes.get('/logo', LogoController.index);
routes.get('/logo/main', LogoController.findMain);
routes.get('/logo/:id', LogoController.findById);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.findById);

routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.findById);
routes.get('/products/search', ProductController.search);
routes.get('/product/stock/:id', ProductController.getStock);

// AQUIIIIIIIIIIIIIIIIIII
routes.use(authMiddleware); // AQUIIII

routes.post('/users/address', UserAddress.store);
routes.get('/users/address', UserAddress.findByUserId);
routes.put('/users/address/:id', UserAddress.update);
routes.delete('/users/address/:id', UserAddress.delete);
routes.get('/user/orders', UserController.getOrders);
routes.put('/users/:id/account', UserController.update);
routes.get('/users/:id/account', UserController.show);

routes.post('/files', upload.single('file'), FileController.store);
routes.delete('/files/:id', FileController.delete);

routes.post('/department', DepartmentController.store);
routes.put('/department/:id', DepartmentController.update);
routes.delete('/department/:id', DepartmentController.delete);

routes.post('/banner', BannerController.store);
routes.put('/banner/:id', BannerController.update);
routes.delete('/banner/:id', BannerController.delete);

routes.post('/logo', LogoController.store);
routes.put('/logo/:id', LogoController.update);
routes.delete('/logo/:id', LogoController.delete);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);
routes.delete(
  '/product/specification/:id/:name',
  ProductController.deleteTechnicalSpecification
);

routes.post('/users/buy', PaymentController.buy);
routes.post('/users/success', PaymentController.success);

routes.get('/checkout_list', CheckoutListController.index);
routes.get('/transactions', TransactionController.index);

export default routes;
