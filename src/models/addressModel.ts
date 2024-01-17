import { model } from 'mongoose';
import addressSchema from '../schemas/addressSchema';

const Address = model('Address', addressSchema);

export default Address;
