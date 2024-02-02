import Address from '../../models/addressModel';

export interface IDeleteAddressRepository {
  deleteAddress: (id: number) => void;
}
