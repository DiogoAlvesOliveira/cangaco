import { Router } from 'express';
import userController from '../controllers/UserController';
// import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.post('/', userController.store);
router.delete('/:id', userController.delete);

export default router;
