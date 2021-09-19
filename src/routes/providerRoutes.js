import { Router } from 'express';
import providerController from '../controllers/ProviderController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', providerController.index);
router.get('/:id', providerController.show);
router.post('/', loginRequeired, providerController.store);
router.put('/:id', loginRequeired, providerController.update);
router.delete('/:id', loginRequeired, providerController.delete);

export default router;
