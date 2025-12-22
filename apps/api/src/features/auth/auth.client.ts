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

    async signOut(token?: string) {
        const { error } = await this.supabase.auth.signOut(token ? { scope: 'global' } : undefined);
        return { error };
    }

    async getUser(token?: string) {
        if (token) {
            const { data: { user }, error } = await this.supabase.auth.getUser(token);
            return { data: { user }, error };
        }
        const { data: { user }, error } = await this.supabase.auth.getUser();
        return { data: { user }, error };
    }
}

export default new AuthClient();
