import epr from 'express-promise-router';
import * as authController from '../modules/auth/auth.controller';

// These routes are set to use v1 to allow for future change
const router = epr();

router.post('/user', authController.userSignup);

export default router;
