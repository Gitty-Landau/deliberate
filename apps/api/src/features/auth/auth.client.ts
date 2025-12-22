import { SupabaseClient } from '@supabase/supabase-js';
import database from '../database/database.client.js';

class AuthClient {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = database;
    }

    async signUp(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signUp({
            email,
            password,
        });
        return { data, error };
    }

    async signIn(email: string, password: string) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { data, error };
    }

    async signOut() {
        const { error } = await this.supabase.auth.signOut();
        return { error };
    }

    async getUser() {
        const { data: { user } } = await this.supabase.auth.getUser();
        return user;
    }
}

export default new AuthClient();
