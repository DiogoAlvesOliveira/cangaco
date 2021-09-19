import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();

router.get('/', loginRequeired, userController.index);
router.get('/:id', userController.show);

router.post('/', loginRequeired, userController.store);
router.put('/', loginRequeired, userController.update);
router.delete('/', loginRequeired, userController.delete);

export default router;
