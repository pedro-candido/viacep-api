import { Request, Response } from 'express';
import { MongoGetAddressesRepository } from '../../repositories/get-addresses';
import { IGetAddressController } from './GetAddressesController.types';

export class GetAddressesController implements IGetAddressController {
  async handle(req: Request, res: Response) {
    const repository = new MongoGetAddressesRepository();

    const addresses = await repository.getAddresses();
    return res.send(addresses);
  }
}
