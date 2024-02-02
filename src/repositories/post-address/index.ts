import Address from '../../models/addressModel';
import { IPostAddressRepository } from './post-address.types';

export class MongoPostAddressRepository implements IPostAddressRepository {
  async postAddress(data: typeof Address) {
    const address = new Address(data);

    await address.save();

    return;
  }
}
