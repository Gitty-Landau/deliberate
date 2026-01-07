import { LoginFormValues } from "@deliberate/types"
import supabase from "../database/database.client"
import { AuthResponse, Session, UserResponse } from "@supabase/supabase-js"

const getUser = async (): Promise<AuthResponse['data']> => {
    const { data: { session } } = await supabase.auth.getSession()

    return {
        user: session?.user ?? null,
        session: session ?? null,
    }
}

const getSession = async (): Promise<Session | null> => {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) throw error;

    return session
}

const signIn = async ({ email, password }: LoginFormValues): Promise<AuthResponse['data']> => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw error;
    return data;
}

const signUp = async ({ email, password }: LoginFormValues): Promise<AuthResponse['data']> => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) throw error;
    return data;
}

const signOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

const updateUser = async (attributes: { email?: string; password?: string; data?: object }): Promise<UserResponse['data']> => {
    const { data, error } = await supabase.auth.updateUser(attributes);
    if (error) throw error;
    return data;
}

export default {
    getUser,
    getSession,
    signIn,
    signUp,
    signOut,
    updateUser
}