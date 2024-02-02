import axios from 'axios';
import { Request, Response } from 'express';
import Address from 'src/models/addressModel';
import { MongoFindAddressRepository } from '../../repositories/find-address';
import { MongoUpdateAddressRepository } from '../../repositories/update-address';
import { throwErr } from '../../utils';

export class UpdateAddressController {
  async handle(req: Request, res: Response) {
    const findAddressRepository = new MongoFindAddressRepository();
    const foundItem = await findAddressRepository.findAddress(req);

    const {
      body: { zipCode, addressNumber },
    } = req;

    throwErr({ zipCode, addressNumber });

    const { data } = await axios.get<typeof Address>(
      `https://viacep.com.br/ws/${zipCode}/json/`
    );

    const repository = new MongoUpdateAddressRepository();
    await repository.updateAddress(foundItem, data, addressNumber, res);

    return;
  }
}
