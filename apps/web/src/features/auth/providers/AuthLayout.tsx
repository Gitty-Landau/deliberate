
import { Blend } from "lucide-react"
import { Link, Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import PublicRoute from "@/features/auth/providers/PublicRoute"

const AuthLayout = () => (
    <PublicRoute>
        <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
            <header className="p-4 flex items-center">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <Blend className="h-6 w-6 text-primary" />
                    Deliberate
                </Link>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <Outlet />
            </main>
            <Toaster />
        </div>
    </PublicRoute>
)


export default AuthLayout
