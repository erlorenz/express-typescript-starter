import { query } from '../../startup/db';
import { GeneralError } from '../../utils/errors';
import { UserSignupDto } from './auth.dto';

export async function createUser(userSignupDto: UserSignupDto) {
  // call create user data layer
}
