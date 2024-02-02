import Address from '../../models/addressModel';
import { IDeleteAddressRepository } from './delete-address.types';

export class MongoDeleteAddressRepository implements IDeleteAddressRepository {
  async deleteAddress(id: number) {
    await Address.findByIdAndDelete(id);

    return;
  }
}
