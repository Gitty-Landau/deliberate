import supabase from '@/features/database/database.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface AuthCredentials {
    email: string;
    password: string;
}

const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: AuthCredentials) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['session'] });
        },
    });
}


const useSignup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: AuthCredentials) => {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) throw error;
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['session'] });
        },
    });
}


const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['session'] });
        },
    });
}



export default {
    useLogin,
    useSignup,
    useLogout,
};