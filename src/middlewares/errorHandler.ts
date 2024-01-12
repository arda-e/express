import { Response, Request } from 'express';
import { ErrorResponse } from '../interfaces';

/**
 * @name errorHandler
 * @description Middleware to handle errors and send error responses to clients.
 * @summary This middleware sets the response status code based on the provided status code or defaults to 500 (Internal Server Error).
 * It sends a JSON response with the error message and, in development mode, the error stack trace.
 * @param {Error} err - The error object representing the encountered error.
 * @param {Response} res - The Express Response object.
 * @returns {void}
 */
export default function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>): void {
  console.error('Error:', err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // Prepare the JSON response with error message and stack (in development)
  const errorResponse: ErrorResponse = {
    message: err.message,
  };

  if (process.env.NODE_ENV !== 'production') {
    errorResponse.stack = err.stack;
  }

  res.status(statusCode).json(errorResponse);
}
