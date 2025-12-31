import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Form,
} from '@/components/ui/form';
import AuthInput from '@/features/auth/components/AuthInput';
import authMutations from '../hooks/auth.mutations';
import { signupSchema } from '@deliberate/schemas';
import type { SignupFormValues } from '@deliberate/types';

const SignupPage = () => {
    const navigate = useNavigate();
    const { mutate: signup, error, isPending: isSignupPending } = authMutations.useSignup();

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data: SignupFormValues) => signup({ email: data.email, password: data.password }, {
        onSuccess: () => navigate('/'),
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Enter your details to get started
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <CardContent className="space-y-4">
                            {error && (
                                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                                    {error.message}
                                </div>
                            )}
                            <AuthInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="you@example.com"
                                type="email"
                                autoComplete="email"
                            />
                            <AuthInput
                                control={form.control}
                                name="password"
                                label="Password"
                                placeholder="••••••••"
                                type="password"
                                autoComplete="new-password"
                            />
                            <AuthInput
                                control={form.control}
                                name="confirmPassword"
                                label="Confirm Password"
                                placeholder="••••••••"
                                type="password"
                                autoComplete="new-password"
                            />
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button
                                type="submit"
                                className="w-full"
                                isLoading={isSignupPending}
                                icon={<UserPlus className="mr-2 h-4 w-4" />}
                            >
                                Create account
                            </Button>
                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="font-medium text-primary underline-offset-4 hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}

export default SignupPage