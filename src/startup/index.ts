import { Express, NextFunction, Request, Response } from 'express';
import expressPino from 'express-pino-logger';
import { logger } from './logger';
import express from 'express';
import cors from 'cors';
import routes from '../routes';

export function initializeMiddleware(app: Express) {
  app.use(expressPino({ logger }));

  app.use(express.json());

  app.use(cors({ origin: ['http://324.423.2.2:200'] }));

  app.use('/api', routes);

  // Main error handler
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(res.statusCode < 400 ? 500 : res.statusCode);
    res.json({ error: err.message || 'Internal server error' });
  });
}
