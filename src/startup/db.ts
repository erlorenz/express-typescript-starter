import { Pool } from 'pg';
import { GeneralError } from '../utils/errors';
import { logger } from './logger';

const pool = new Pool();

export function query(text: string, params: string[]) {
  return pool.query(text, params);
}

export async function initializeDb() {
  try {
    await query('SELECT NOW() as now', []);
    logger.info('Database is connected.');
  } catch (err) {
    throw new GeneralError('DB Error: ' + err.message);
  }
}
