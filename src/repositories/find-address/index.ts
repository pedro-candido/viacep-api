import { Request } from 'express';
import Address from '../../models/addressModel';

export class MongoFindAddressRepository {
  async findAddress(req: Request) {
    const addressFound = await Address.findOne({ _id: req.params.id });

    return addressFound;
  }
}
