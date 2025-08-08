import './Header.scss'
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <header className="header">
            <div className="header_inner container">
                <Logo loading="eager" />
            </div>
        </header>
    )
}

export default Header