import Address from '../../models/addressModel';

export interface IGetAddressesRepository {
  findAddress: () => typeof Address;
}
