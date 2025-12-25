import { z } from 'zod';
import type { LoginFormValues, SignupFormValues } from '@deliberate/types';

export const loginSchema: z.ZodType<LoginFormValues> = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

export const signupSchema: z.ZodType<SignupFormValues> = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
