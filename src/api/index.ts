import express from 'express';

import UsersRouter from './users/users.routes';
import { MessageResponse } from '../interfaces/';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - Root',
  });
});

router.use('/users', UsersRouter);

export default router;
