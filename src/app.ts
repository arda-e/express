require('dotenv').config();
import express from 'express';
import api from './api';

const app = express();

interface MessageResponse {
    message: string;
}

app.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
      message: 'Welcome to Express API',
    });
  });

app.use('api/v1', api)

// Error handling middleware

export default app;