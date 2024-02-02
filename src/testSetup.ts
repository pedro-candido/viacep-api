// import mongoose from 'mongoose';
// import { config } from 'dotenv';

// config();

// const tearDownTests = async () => {
//   beforeAll(async () => {
//     let mockMongoose: MockMongoose = new MockMongoose(mongoose);
//     mockMongoose.prepareStorage().then(() => {
//       mongoose.connect(process.env.DB_DEV_URI);
//       mongoose.connection.on('connected', () => {
//         console.log('db connection is now open');
//       });
//     });
//   });
// };

// export default tearDownTests;
