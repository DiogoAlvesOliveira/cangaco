import { Router } from 'express';
import sallerController from '../controllers/SallerController';
// import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', sallerController.index);
router.get('/:id', sallerController.show);
router.post('/', sallerController.store);
router.put('/:id', sallerController.update);
router.delete('/:id', sallerController.delete);

export default router;
