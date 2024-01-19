import axios from 'axios';
import { Router } from 'express';
import Address from '../models/addressModel';
import { throwErr } from '../utils';

const router = Router();

// router.get('/', async (_, res) => {
//   const content = await getAddress('09572210');

//   res.send(content);
// });

router.get('/addresses', async (_, res) => {
  const addresses = await Address.find();

  return res.send(addresses);
});

router.get('/api/:cep', async (req, res) => {
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${req.params.cep}/json/`
  );

  res.send(JSON.stringify(data));

  return JSON.stringify(data);
});

router.put('/api/changeaddress/:id', async (req, res) => {
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
});

router.post('/api/register', async (req, res) => {
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

    return res.send(address);
  } catch (err) {
    return res
      .status(400)
      .send('Bad request - Opa, parece que faltou preencher algum dado');
  }
});

router.delete('/api/deleteaddress/:id', async (req, res) => {
  const { id } = req.params;

  await Address.findByIdAndDelete(id);

  return res.send(`${id} address deleted`);
});

export default router;
