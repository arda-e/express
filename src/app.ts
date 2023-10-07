require('dotenv').config();
import express from 'express';

const app = express();

interface MessageResponse {
    message: string;
}

app.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
      message: 'Welcome to the API',
    });
  });
  

export default app;