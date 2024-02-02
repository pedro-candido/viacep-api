import axios from 'axios';
import Address from '../../models/addressModel';
import { Request, Response } from 'express';
import { IUpdateAddressRepository } from './update-address.types';
import { Model } from 'mongoose';

export class MongoUpdateAddressRepository implements IUpdateAddressRepository {
  async updateAddress(
    item: any,
    data: typeof Address,
    addressNumber: number,
    res: Response
  ) {
    item?.overwrite({ ...data, addressNumber }).save();

    res.send(item);
    return;
  }
}
