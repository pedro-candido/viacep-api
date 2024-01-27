import { Request, Response } from 'express';
import Address from '../models/addressModel';
import axios from 'axios';
import { throwErr } from '../utils';

class AddressController {
  async list(req: Request, res: Response) {
    const addresses = await Address.find();

    return res.send(addresses);
  }
  async pick(req: Request, res: Response) {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${req.params.cep}/json/`
    );

    res.send(JSON.stringify(data));
    return data;
  }
  async create(req: Request, res: Response) {
    try {
      const {
        body: { zipCode, addressNumber },
      } = req;

      throwErr({ zipCode, addressNumber });

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      const newData = {
        ...data,
        addressNumber,
      };

      const address = new Address(newData);

      await address.save();

      return res.json(address);
    } catch (err) {
      return res
        .status(400)
        .send('Bad request - Opa, parece que faltou preencher algum dado');
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await Address.findByIdAndDelete(id);

    return res.send(`${id} address deleted`);
  }
  async update(req: Request, res: Response) {
    try {
      const item = await Address.findOne({ _id: req.params.id });
      console.warn('item', item);
      const {
        body: { zipCode, addressNumber },
      } = req;

      throwErr({ zipCode, addressNumber });

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      item?.overwrite({ ...data, addressNumber }).save();

      return res.send(item);
    } catch (err) {
      return res
        .status(400)
        .send('Bad request - Opa, parece que faltou preencher algum dado');
    }
  }
}

export default new AddressController();
