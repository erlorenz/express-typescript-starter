import * as yup from 'yup';

// Create schema for user signup DTO
export const userSignupSchema = yup.object({
  name: yup.string().required(),
  gender: yup
    .mixed()
    .oneOf(['male' as const, 'female' as const, 'other' as const])
    .required(),
});

// Create matching typescript interface
export interface UserSignupDto extends yup.Asserts<typeof userSignupSchema> {}
