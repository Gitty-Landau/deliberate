import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import authMutations from '@/features/auth/hooks/auth.mutations';
import { preferencesSchema } from '@deliberate/schemas';
import type { PreferencesFormValues } from '@deliberate/types';
import { toast } from 'sonner';
import AuthInput from '@/features/auth/components/AuthInput';
import { ShieldCheck, UserRound, Save } from 'lucide-react';
import { useUser } from '@/features/auth/hooks/auth.queries';

const PreferencesPage = () => {
    const { data } = useUser();
    const user = data?.user;
    const { mutate: updateUser, isPending } = authMutations.useUpdateUser();

    const form = useForm<PreferencesFormValues>({
        resolver: zodResolver(preferencesSchema),
        defaultValues: {
            fullName: '',
            email: '',
        },
    });

    useEffect(() => {
        if (user) {
            form.reset({
                fullName: user.user_metadata?.full_name || '',
                email: user.email || '',
            });
        }
    }, [user, form]);

    const onSubmit = (data: PreferencesFormValues) => {
        const attributes: { email?: string; password?: string; data?: { full_name: string } } = {};

        if (data.email !== user?.email) attributes.email = data.email;
        if (data.password) attributes.password = data.password;
        if (data.fullName !== user?.user_metadata?.full_name) {
            attributes.data = { full_name: data.fullName };
        }

        if (Object.keys(attributes).length === 0) {
            toast.info('No changes to save');
            return;
        }

        updateUser(attributes, {
            onSuccess: () => {
                toast.success('Preferences updated');
                form.setValue('password', '');
            },
            onError: (error) => {
                toast.error(error.message);
            },
        });
    };

    return (
        <div className="min-h-screen py-10 space-y-8 flex flex-col">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <UserRound className="h-5 w-5" />
                                Profile
                            </CardTitle>
                            <CardDescription>
                                Update your public profile information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <AuthInput
                                control={form.control}
                                name="fullName"
                                label="Display Name"
                                placeholder="Your name"
                            />
                            <AuthInput
                                control={form.control}
                                name="email"
                                label="Email"
                                placeholder="Email address"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <ShieldCheck className="h-5 w-5" />
                                Security
                            </CardTitle>
                            <CardDescription>
                                Manage your password and account security.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <AuthInput
                                control={form.control}
                                name="password"
                                label="New Password"
                                type="password"
                                placeholder="Leave blank to keep current password"
                            />
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            isLoading={isPending}
                            icon={<Save className="mr-2 h-4 w-4" />}
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default PreferencesPage;
