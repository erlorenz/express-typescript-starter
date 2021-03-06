import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import config from './config';
import { logger } from './startup/logger';
import { initializeMiddleware } from './startup';
// import { initializePubsub } from './startup/pubsub';
import { initializeDb } from './startup/db';

const app = express();

// Startup loaders
initializeMiddleware(app);
initializeDb();

// Start server
app.listen(config.port, () =>
  logger.info(
    'Server running on port ' + config.port + ' in ' + config.env + ' mode.'
  )
);

// Unhandled
process.on('unhandledRejection', (reason: Error, promise) => {
  logger.error('Unhandled rejection: ' + reason.message);
  throw new Error(reason.message);
});
