import Address from '../../models/addressModel';

export class MongoGetAddressesRepository {
  async getAddresses() {
    return await Address.find();
  }
}
