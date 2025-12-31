import supabase from "@/features/database/database.client";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../constants/queryKeys";

export const useSession = () => useQuery({
    queryKey: queryKeys.session,
    queryFn: async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session;
    },
});
