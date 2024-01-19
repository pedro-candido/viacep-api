import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger-output.json';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
