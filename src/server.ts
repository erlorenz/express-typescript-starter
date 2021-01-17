import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import 'express-async-errors';
import pino from 'pino';
import expressPino from 'express-pino-logger';
import config from './config';
import { initializeMiddleware } from './startup';
import { logger } from './startup/logger';
import { initializeDb } from './startup/db';

const app = express();

// Startup and other middleware
initializeMiddleware(app);
initializeDb();

// Health Check
app.get('/', (req, res) => res.status(200).send('🚀 App is running'));

// Start server
app.listen(config.port, () =>
  logger.info(
    'Server running on port ' + config.port + ' in ' + config.env + ' mode.'
  )
);
