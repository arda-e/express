import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();

import api from './api';
import { MessageResponse } from './interfaces/';
import * as middlewares from './middlewares';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Welcome to Express API',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
