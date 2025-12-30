
import { Outlet } from "react-router-dom"
import Header from "../Header"



const RootLayout = () => (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        <main className="p-4 flex flex-col gap-4">
            <Outlet />
        </main>
    </div>
)

export default RootLayout
