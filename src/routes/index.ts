import { Router } from 'express';

import AddressesController from '../controllers/AddressesController';

const router = Router();

router.get('/addresses', AddressesController.list);

router.get('/api/:cep', AddressesController.pick);

router.put('/api/changeaddress/:id', AddressesController.update);

router.post('/api/register', AddressesController.create);

router.delete('/api/deleteaddress/:id', AddressesController.delete);

export default router;
