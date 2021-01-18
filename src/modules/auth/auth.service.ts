import { query } from '../../startup/db';
import { GeneralError } from '../../utils/errors';
import { UserSignupDto } from './auth.dto';

export async function createUser(userSignupDto: UserSignupDto) {
  // call create user data layer

  try {
    const response = await query('SELECT NOW() as now', []);
    console.log(response.rows[0]);
    return {
      dbResponse: response.rows[0],
    };
  } catch (err) {
    throw new GeneralError('Database connection error: ' + err.message);
  }
}
