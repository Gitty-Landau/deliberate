import supabase from "@/features/database/database.client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import authServices from "../auth.services";


const queryKeys = {
    session: ["session"] as const,
    user: ["user"] as const,
}

export const useSession = () => useQuery({
    queryKey: queryKeys.session,
    queryFn: authServices.getSession,
    staleTime: Infinity,
});

export const useUser = () => {
    const queryClient = useQueryClient()

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                // Determine if the session actually changed to avoid unnecessary refetches
                // For simplicity, we can just set the query data directly or invalidate
                if (session)
                    queryClient.setQueryData(queryKeys.user, { user: session.user, session })
                else
                    queryClient.setQueryData(queryKeys.user, { user: null, session: null })
            }
        )

        return () => subscription.unsubscribe()
    }, [queryClient])

    return useQuery({
        queryKey: queryKeys.user,
        queryFn: authServices.getUser,
        staleTime: Infinity,
    })
}