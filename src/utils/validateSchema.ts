import { BadRequestError } from './errors';

import { ObjectSchema } from 'yup';

export default async function validateSchema(
  schema: ObjectSchema<any>,
  dto: any
) {
  try {
    await schema.validate(dto);
  } catch (err) {
    throw new BadRequestError(err.errors[0]);
  }
}
