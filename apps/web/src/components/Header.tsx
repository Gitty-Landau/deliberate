import { Blend } from "lucide-react"
import UserDropdown from "./UserDropdown"
import { ModeToggle } from "./mode-toggle"
import { Link } from "react-router-dom"

const Header = () => (
    <header className="p-4 flex justify-between items-center border-b">
        <Link to="/" className="flex items-center text-xl font-bold">
            <Blend className="h-6 w-6 mr-2 text-primary" />
            Deliberate
        </Link>
        <div className="flex items-center gap-2">
            <ModeToggle />
            <UserDropdown />
        </div>
    </header>
)


export default Header
