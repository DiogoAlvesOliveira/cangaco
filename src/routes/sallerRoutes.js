import { Router } from 'express';
import sallerController from '../controllers/SallerController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', sallerController.index);
router.get('/:id', sallerController.show);
router.post('/', loginRequeired, sallerController.store);
router.put('/:id', loginRequeired, sallerController.update);
router.delete('/:id', loginRequeired, sallerController.delete);

export default router;
