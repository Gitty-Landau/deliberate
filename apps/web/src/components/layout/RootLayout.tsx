
import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import { Toaster } from "@/components/ui/sonner"



const RootLayout = () => (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        <main className="p-4 flex flex-col gap-4 flex-1">
            <Outlet />
        </main>
        <Toaster />
    </div>
)

export default RootLayout
