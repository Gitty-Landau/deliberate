import { z } from 'zod';

const BaseSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const loginSchema = BaseSchema;

export const signupSchema = BaseSchema.extend({
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const preferencesSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: BaseSchema.shape.email,
    password: BaseSchema.shape.password.optional(),
});
