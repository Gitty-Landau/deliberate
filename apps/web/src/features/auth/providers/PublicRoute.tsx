import { Navigate } from "react-router-dom"
import { useUser } from "../hooks/auth.queries"

type Props = {
    children: React.ReactNode
}


const PublicRoute = ({ children }: Props) => {
    const { data, isLoading } = useUser()

    if (isLoading)
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        )

    if (data?.user)
        return <Navigate to="/" replace />

    return <>{children}</>
}


export default PublicRoute