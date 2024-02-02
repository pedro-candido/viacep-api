import { Response } from 'express';
import Address from '../../models/addressModel';

export interface IUpdateAddressRepository {
  updateAddress: (
    item: typeof Address,
    data: typeof Address,
    addressNumber: number,
    res: Response
  ) => void;
}
