import { Express, NextFunction, Request, Response } from 'express';
import { GeneralError } from '../utils/errors';
import { logger } from './logger';

// This is using express-async-errors and therefore express will catch errors without try/catch
// and forward to this handler

export default function errorHandler(
  err: GeneralError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Check if its a custom error otherwise default to 500
  logger.error(err);
  res.status(err instanceof GeneralError ? err.statusCode : 500);
  res.json({ error: err.message ?? 'Internal server error' });
}
