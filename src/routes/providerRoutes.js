import { Router } from 'express';
import providerController from '../controllers/ProviderController';
// import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', providerController.index);
router.get('/:id', providerController.show);
router.post('/', providerController.store);
router.put('/:id', providerController.update);
router.delete('/:id', providerController.delete);

export default router;
