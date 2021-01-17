import { Request, Response } from 'express';
import { BadRequestError } from '../../../utils/errors';
import validateSchema from '../../../utils/validateSchema';
import { userSignupSchema } from './auth.dto';
import * as userService from './auth.service';

export async function userSignup(req: Request, res: Response) {
  // Use Yup to validate schema as well as create type definition for DTO
  await validateSchema(userSignupSchema, req.body);

  const newUser = await userService.createUser(req.body);

  // const sendEmail = await emailService.sendSignupEmail etc

  res.status(200).json({ data: newUser });
}
