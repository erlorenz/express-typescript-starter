import express from 'express';
import * as authController from '../modules/auth/user/auth.controller';
import { NotFoundError } from '../utils/errors';

// These routes are set to use v1 to allow for future change
const router = express.Router();

router.post('/user', authController.userSignup);

export default router;
