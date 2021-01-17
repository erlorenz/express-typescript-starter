import { createClient } from 'redis';
import { logger } from './logger';

const subscriber = createClient();
const publisher = createClient();

export const redis = { subscriber, publisher };

// Database
export function initializeDb() {
  publisher.on('error', (err) => logger.error(err));
  subscriber.on('error', (err) => logger.error(err));
  publisher.on('ready', () => logger.info('Redis publisher ready.'));
  subscriber.on('ready', () => logger.info('Redis subscriber ready'));
}
