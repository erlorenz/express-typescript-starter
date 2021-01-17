import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import 'express-async-errors';
import config from './config';
import { logger } from './startup/logger';
import { initializeMiddleware } from './startup';
import { initializePubsub } from './startup/pubsub';

const app = express();

// Startup loaders
initializeMiddleware(app);
// initializePubsub();
// initializeDb();

// Start server
app.listen(config.port, () =>
  logger.info(
    'Server running on port ' + config.port + ' in ' + config.env + ' mode.'
  )
);
