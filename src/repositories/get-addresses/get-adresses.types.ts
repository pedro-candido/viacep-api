import Address from '../../models/addressModel';

export interface IGetAddressesRepository {
  getAddresses: () => Promise<(typeof Address)[]>;
}
