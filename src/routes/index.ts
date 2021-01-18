import router from 'express-promise-router';
import { NotFoundError } from '../utils/errors';
import { default as v1Router } from './v1';

const indexRouter = router();

// Health Check
indexRouter.get('/', (req, res) => res.status(200).send('🚀 App is running'));

// Catch-all
indexRouter.use(async () => {
  throw new NotFoundError('This route does not exist');
});

export { v1Router, indexRouter };
