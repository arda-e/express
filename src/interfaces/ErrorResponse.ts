import { MessageResponse } from './MessageResponse';

/**
 * Represents an error response that extends the MessageResponse interface.
 * @interface
 * @extends {MessageResponse}
 * @property {string} stack - The stack trace.
 */
export interface ErrorResponse extends MessageResponse {
  stack?: string;
}
