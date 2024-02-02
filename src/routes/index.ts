import { Router } from 'express';

import { GetAddressesController } from '../controllers/GetAddressesController';
import { PostAddressController } from '../controllers/PostAddressController';
import { UpdateAddressController } from '../controllers/UpdateAddressController.ts/UpdateAddressController';
import { DeleteAddressController } from '../controllers/DeleteAddressController/DeleteAddressController';

const router = Router();
const postAddressController = new PostAddressController();
const getAddressesController = new GetAddressesController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

router.get('/addresses', getAddressesController.handle);

router.put('/api/changeaddress/:id', updateAddressController.handle);

router.post('/api/register', postAddressController.handle);

router.delete('/api/deleteaddress/:id', deleteAddressController.handle);

export default router;
