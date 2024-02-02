import Address from '../../models/addressModel';

export interface IPostAddressRepository {
  postAddress: (data: typeof Address) => void;
}
