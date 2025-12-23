import supabase from "@/features/database/database.client";
import { useQuery } from "@tanstack/react-query";

export const useSession = () => useQuery({
    queryKey: ['session'],
    queryFn: async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session;
    },
});
