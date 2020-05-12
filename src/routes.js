import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControllers';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import DepartmentController from './app/controllers/DepartmentController';
import CategoryController from './app/controllers/CategoryController';
import CheckoutController from './app/controllers/CheckoutController';
import CheckoutListController from './app/controllers/CheckoutListController';
import ProductController from './app/controllers/ProductController';
import EmailController from './app/controllers/EmailController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/forgot_password', EmailController.forgotPassword);
routes.post('/reset_password', EmailController.resetPassword);

// routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/departments', DepartmentController.index);
routes.get(
  '/departments/categories',
  DepartmentController.getDepartmentWithCategory
);
routes.post('/departments', DepartmentController.store);
routes.get('/department/:id', DepartmentController.findById);
routes.delete('/department/:id', DepartmentController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.findById);
routes.get('/products/search', ProductController.search);
routes.get('/product/stock/:id', ProductController.getStock);

routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

routes.post('/checkouts/:id', CheckoutController.store);

routes.get('/checkouts/', CheckoutListController.index);
routes.get('/checkout/:id', CheckoutController.show);
routes.get('/checkouts/user/:id', CheckoutListController.findByUser);

export default routes;
