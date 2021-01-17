import express from 'express';
import * as authController from '../modules/auth/user/auth.controller';
import { NotFoundError } from '../utils/errors';
import { default as v1Router } from './v1';

const indexRouter = express.Router();

// Health Check
indexRouter.get('/', (req, res) => res.status(200).send('🚀 App is running'));

// Catch-all
indexRouter.use(() => {
  throw new NotFoundError('This route does not exist');
});

export { v1Router, indexRouter };
