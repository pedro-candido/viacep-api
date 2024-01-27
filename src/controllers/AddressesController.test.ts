import { Request, Response } from 'express';
import mongoose from 'mongoose';
import request from 'supertest';
import { config } from 'dotenv';

config();

import axios from 'axios';
import AddressController from './AddressesController';
import app from '../app';

beforeEach(async () => {
  await mongoose.connect(process.env.DB_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe('GET /api/:cep', () => {
  let req: Request;
  let res: Response;

  req = {
    params: {
      cep: '09572-210',
    },
    body: {},
  } as unknown as Request;

  res = {
    send: jest.fn(),
    status: jest.fn(),
  } as unknown as Response;

  it('should pick a single address', async () => {
    const data = {
      cep: '09572-210',
      logradouro: 'Rua Aparecida',
      complemento: '',
      bairro: 'Boa Vista',
      localidade: 'São Caetano do Sul',
      uf: 'SP',
      ibge: '3548807',
      gia: '6361',
      ddd: '11',
      siafi: '7077',
    };

    await AddressController.pick(req, res);

    expect(res.send).toHaveBeenCalledWith(JSON.stringify(data));
  });
});

describe('GET /addresses', () => {
  it('should get a list of addresses', async () => {
    const response = await request(app).get('/addresses');

    console.log(response);

    expect(response.status).toBe(200);
  });
});

describe('POST /addresses && DELETE /api/deleteaddress/:id', () => {
  it('should register an address', async () => {
    await request(app)
      .post('/api/register')
      .send({
        zipCode: '09340-380',
        addressNumber: '10',
      })
      .expect(200);
  });
  it('should delete registered address', async () => {
    const { body } = await request(app).get('/addresses');

    const { _id } = body[body.length - 1];

    const res = await request(app).delete(`/api/deleteaddress/${_id}`);

    console.warn('res', res);

    expect(res.text).toBe(`${_id} address deleted`);
  });
});
