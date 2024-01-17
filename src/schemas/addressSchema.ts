import { Schema } from 'mongoose';

const address = new Schema({
  cep: String,
  addressNumber: String,
  logradouro: String,
  complemento: String,
  bairro: String,
  localidade: String,
  uf: String,
  ibge: String,
  gia: String,
  ddd: String,
  siafi: String,
});

export default address;
