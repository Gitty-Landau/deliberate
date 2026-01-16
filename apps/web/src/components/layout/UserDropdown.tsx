import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import authMutations from "@/features/auth/hooks/auth.mutations"
import { useNavigate } from "react-router-dom"
import { LogOut, Settings } from "lucide-react"
import { useUser } from "@/features/auth/hooks/auth.queries"

const UserDropdown = () => {
    const { data } = useUser()
    const user = data?.user

    const { mutate: logout } = authMutations.useLogout()
    const navigate = useNavigate()

    if (!user) return null

    const handleLogout = () => logout(undefined, {
        onSuccess: () => navigate("/login"),
    })

    const initials = user.email?.[0].toUpperCase() || "U"

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none cursor-pointer">
                <Avatar>
                    <AvatarImage src={user.user_metadata?.avatar_url ?? ""} />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal flex flex-col gap-2">
                    {user.user_metadata?.full_name && <p className="text-xs leading-none text-muted-foreground">
                        {user.user_metadata.full_name}
                    </p>}
                    <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                    </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/preferences")} className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
