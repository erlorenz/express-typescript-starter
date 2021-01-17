import { userSignup } from './auth.controller';
import { UserSignupDto } from './auth.dto';

export async function createUser(userSignupDto: UserSignupDto) {
  // call create user data layer

  return {
    user: userSignupDto.name,
    id: '324233',
    gender: userSignupDto.gender,
  };
}
