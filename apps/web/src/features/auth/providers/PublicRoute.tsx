import { useAuth } from "@/features/auth/providers/AuthProvider"
import { Navigate } from "react-router-dom"

type Props = {
    children: React.ReactNode
}


const PublicRoute = ({ children }: Props) => {
    const { user, loading } = useAuth()

    if (loading)
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        )

    if (user)
        return <Navigate to="/" replace />

    return <>{children}</>
}


export default PublicRoute