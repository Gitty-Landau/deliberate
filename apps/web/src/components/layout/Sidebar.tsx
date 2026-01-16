
import { Home, Blend, PlusIcon, ListIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"
import UserDropdown from "./UserDropdown"

const Sidebar = () => {
    const location = useLocation()

    const navItems = [
        {
            label: "Dashboard",
            icon: Home,
            href: "/",
        },
        {
            label: "New Decision",
            icon: PlusIcon,
            href: "/decisions/new",
        },
        {
            label: "Decisions List",
            icon: ListIcon,
            href: "/decisions",
        },
    ]

    return (
        <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-10 w-14 flex flex-col border-r bg-background">
                <div className="flex flex-col items-center gap-8 py-4">
                    <Link to="/" className="flex items-center justify-center">
                        <Blend className="h-6 w-6 text-primary" />
                        <span className="sr-only">Deliberate</span>
                    </Link>
                    <nav className="flex flex-col items-center gap-2 px-2">
                        {navItems.map((item) => (
                            <Tooltip key={item.label} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={item.href}
                                        className={cn(
                                            "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                                            location.pathname === item.href
                                                ? "bg-muted text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span className="sr-only">{item.label}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.label}</TooltipContent>
                            </Tooltip>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto flex flex-col items-center gap-4 py-4 px-2">
                    <UserDropdown />
                </div>
            </aside>
        </TooltipProvider>
    )
}

export default Sidebar
