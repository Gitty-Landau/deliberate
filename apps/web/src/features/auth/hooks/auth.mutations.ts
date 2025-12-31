import supabase from '@/features/database/database.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { LoginFormValues } from '@deliberate/types';

const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: LoginFormValues) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}


const useSignup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: LoginFormValues) => {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) throw error;
            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}


const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}

const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (attributes: { email?: string; password?: string; data?: object }) => {
            const { data, error } = await supabase.auth.updateUser(attributes);
            if (error) throw error;
            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}



export default {
    useLogin,
    useSignup,
    useLogout,
    useUpdateUser,
};