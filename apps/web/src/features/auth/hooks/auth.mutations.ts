import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import authServices from '../auth.services';

const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authServices.signIn,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}


const useSignup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authServices.signUp,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}


const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authServices.signOut,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}

const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authServices.updateUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.session })
    });
}

export default {
    useLogin,
    useSignup,
    useLogout,
    useUpdateUser,
};