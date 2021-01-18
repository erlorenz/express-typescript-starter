import { Express, NextFunction, Request, Response } from 'express';
import expressPino from 'express-pino-logger';
import { logger } from './logger';
import express from 'express';
import cors from 'cors';
import { indexRouter, v1Router } from '../routes';
import errorHandler from './error';
import { NotFoundError } from '../utils/errors';
import { initializeDb } from './db';

export function initializeMiddleware(app: Express) {
  app.use(expressPino({ logger }));

  app.use(express.json());

  app.use(cors({ origin: [''] }));

  app.use('/api/v1', v1Router);
  app.use('/', indexRouter);

  app.use(errorHandler);
}
