import { Request, Response } from 'express';
import { IPostAddressController } from './PostAddressController.types';
import axios from 'axios';
import { throwErr } from '../../utils';
import Address from '../../models/addressModel';
import { MongoPostAddressRepository } from '../../repositories/post-address';

export class PostAddressController implements IPostAddressController {
  async handle(req: Request, res: Response) {
    try {
      const {
        body: { zipCode, addressNumber },
      } = req;

      throwErr({ zipCode, addressNumber });

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      const newData = {
        ...data,
        addressNumber,
      };

      const repository = new MongoPostAddressRepository();

      const address = await repository.postAddress(newData);

      return res.json(address);
    } catch (err) {
      return res
        .status(400)
        .send('Bad request - Opa, parece que faltou preencher algum dado');
    }
  }
}
