
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { ModeToggle } from "./mode-toggle"
import { Toaster } from "@/components/ui/sonner"
import ProtectedRoute from "@/features/auth/providers/ProtectedRoute"

const RootLayout = () => (
    <ProtectedRoute>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 justify-end">
                    <ModeToggle />
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Outlet />
                </main>
            </div>
            <Toaster />
        </div>
    </ProtectedRoute>
)

export default RootLayout
