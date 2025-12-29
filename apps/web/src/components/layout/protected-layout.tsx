
import { ModeToggle } from "@/components/mode-toggle"

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <header className="p-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-bold">Deliberate</h1>
            <div className="flex items-center gap-2">
                <ModeToggle />
            </div>
        </header>
        <main className="p-4 flex flex-col gap-4">
            {children}
        </main>
    </div>
)

export default ProtectedLayout
