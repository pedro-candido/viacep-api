import axios from 'axios';
import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello World!');
});

router.get('/api/:cep', async (req, res) => {
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${req.params.cep}/json/`
  );

  console.warn('address', data);

  res.send(JSON.stringify(data));

  return JSON.stringify(data);
});

export default router;
