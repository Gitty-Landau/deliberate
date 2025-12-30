import UserDropdown from "./UserDropdown"
import { ModeToggle } from "./mode-toggle"

const Header = () => (
    <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Deliberate</h1>
        <div className="flex items-center gap-2">
            <ModeToggle />
            <UserDropdown />
        </div>
    </header>
)


export default Header
