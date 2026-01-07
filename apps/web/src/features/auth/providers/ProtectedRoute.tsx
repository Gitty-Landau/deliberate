import { Navigate } from "react-router-dom"
import { useUser } from "../hooks/auth.queries"

type Props = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
    const { data: user, isLoading } = useUser()

    if (isLoading)
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        )

    if (!user)
        return <Navigate to="/login" replace />

    return <>{children}</>
}

export default ProtectedRoute