import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControllers';
// import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import CategoryController from './app/controllers/CategoryController';
import CheckoutController from './app/controllers/CheckoutController';
import CheckoutListController from './app/controllers/CheckoutListController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', async (req, res) => {
  // const user = await User.create({
  //   name: 'moises',
  //   email: 'moises@hotmail.com',
  //   password_hash: '123456',
  // });
  return res.status(200);
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

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
