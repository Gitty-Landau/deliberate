import { z } from 'zod';
import { loginSchema, signupSchema, preferencesSchema } from '@deliberate/schemas';

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;
export type PreferencesFormValues = z.infer<typeof preferencesSchema>;
