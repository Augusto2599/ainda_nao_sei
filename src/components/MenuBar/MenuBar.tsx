import { FaHome, FaUsers, FaImages, FaSearch, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import './MenuBar.css';

interface MenuBarProps {
    onSignInClick: () => void;
    onSignUpClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onSignInClick, onSignUpClick }) => {
    return (
        <header className="menu-bar">
            <nav className="menu-nav">
                <div className="menu-section left">
                    <a href="/index.html" className="menu-button">
                        <FaHome className="menu-icon" />
                        <span>Home</span>
                    </a>
                    <a href="#" className="menu-button">
                        <FaUsers className="menu-icon" />
                        <span>Comunidade</span>
                    </a>
                    <a href="#" className="menu-button">
                        <FaImages className="menu-icon" />
                        <span>Galeria</span>
                    </a>
                </div>

                <div className="menu-section middle">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Pesquisar..." />
                    </div>
                </div>

                <div className="menu-section right">
                    <button className="menu-button signup-button" onClick={onSignInClick}>
                        <FaUserCircle className="signup-icon" />
                        <span>Sign In</span>
                    </button>
                    <button className="menu-button signup-button" onClick={onSignUpClick}>
                        <FaUserPlus className="signup-icon" />
                        <span>Sign Up</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default MenuBar;