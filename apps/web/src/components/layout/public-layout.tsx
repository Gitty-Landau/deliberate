
import { ModeToggle } from "@/components/mode-toggle"

interface PublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <header className="p-4 flex justify-end items-center absolute w-full top-0 right-0 z-10">
            <ModeToggle />
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
            {children}
        </main>
    </div>
)


export default PublicLayout