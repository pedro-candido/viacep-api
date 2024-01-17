import axios from 'axios';
import { Router } from 'express';
import Address from '../models/addressModel';

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

router.post('/api/register', async (req, res) => {
  const {
    body: { zipCode, addressNumber },
  } = req;

  if (!zipCode || !addressNumber) {
    Promise.reject(new Error('404 - Opa, faltou algum dado'));
  }

  const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

  const newData = {
    ...data,
    addressNumber,
  };

  const address = new Address(newData);

  await address.save();

  return res.send(address);
});

export default router;
