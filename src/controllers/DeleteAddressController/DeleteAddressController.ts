import { Request, Response } from 'express';
import { IDeletetAddressController } from './DeleteAddressController.types';
import Address from '../../models/addressModel';

export class DeleteAddressController implements IDeletetAddressController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    return res.send(`${id} address deleted`);
  }
}
