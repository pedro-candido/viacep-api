import { config } from 'dotenv';
import mongoose from 'mongoose';

config();
const DB_URI = process.env.DB_PROD_URI;

export const connectDatabase = async () => {
  await mongoose.connect(DB_URI ?? '');
};
