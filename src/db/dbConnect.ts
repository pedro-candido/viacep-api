import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();
const DB_URI = process.env.DB_URI;

const connectToCluster = async () => {
  let mongoClient;

  try {
    mongoClient = new MongoClient(DB_URI ?? '');
    console.log('Connecting to MongoDB Atlas cluster...');
    await mongoClient.connect();
    console.log('Successfully connected to MongoDB Atlas!');

    return mongoClient;
  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    process.exit();
  }
};

let mongoClient: MongoClient;

export const connectDatabase = async () => {
  try {
    mongoClient = await connectToCluster();
  } finally {
    mongoClient.close();
  }
};
