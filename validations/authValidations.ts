import { z } from 'zod';

export const loginValidation = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email()
    .trim(),
  password: z.string().min(5),
});
