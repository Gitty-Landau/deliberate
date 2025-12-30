import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/features/auth/providers/AuthProvider"
import authMutations from "@/features/auth/hooks/auth.mutations"
import { useNavigate } from "react-router-dom"

const UserDropdown = () => {
    const { user } = useAuth()
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
                    <AvatarImage src="" />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                    <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                    </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
