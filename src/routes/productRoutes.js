import { Router } from 'express';
import productController from '../controllers/ProductController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', productController.index);
router.get('/:id', productController.show);
router.post('/', loginRequeired, productController.store);
router.put('/:id', loginRequeired, productController.update);
router.delete('/:id', loginRequeired, productController.delete);

export default router;
