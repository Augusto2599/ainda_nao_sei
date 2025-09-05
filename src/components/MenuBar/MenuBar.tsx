import { FaHome, FaUsers, FaImages, FaSearch, FaUserCircle } from 'react-icons/fa';
import './MenuBar.css';

function MenuBar() {
    return (
        <header className="menu-bar">
            <nav className="menu-nav">
                <div className="menu-section left">
                    <button className="menu-button">
                        <FaHome className="menu-icon" />
                        <span>Home</span>
                    </button>
                    <button className="menu-button">
                        <FaUsers className="menu-icon" />
                        <span>Comunidade</span>
                    </button>
                    <button className="menu-button">
                        <FaImages className="menu-icon" />
                        <span>Galeria</span>
                    </button>
                </div>

                <div className="menu-section middle">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Pesquisar..." />
                    </div>
                </div>

                <div className="menu-section right">
                    <button className="menu-button">
                        <FaUserCircle className="menu-icon" />
                        <span>Sign In</span>
                    </button>
                    <button className="menu-button">
                        <span>Sign Up</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default MenuBar;