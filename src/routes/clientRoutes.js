import { Router } from 'express';
import clientController from '../controllers/ClientController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', clientController.index);
router.get('/:id', clientController.show);
router.post('/', loginRequeired, clientController.store);
router.put('/:id', loginRequeired, clientController.update);
router.delete('/:id', loginRequeired, clientController.delete);

export default router;
