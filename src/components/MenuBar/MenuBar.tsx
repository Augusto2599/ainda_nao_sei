import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUsers, FaImages, FaSearch, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import './MenuBar.css';

interface MenuBarProps {
    onSignInClick: () => void;
    onSignUpClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onSignInClick, onSignUpClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            navigate(`/search?q=${searchTerm.trim()}`);
            setSearchTerm(''); // Limpa o campo após a busca
        }
    };

    return (
        <header className="menu-bar">
            <nav className="menu-nav">
                <div className="menu-section left">
                    <Link to="/" className="menu-button">
                        <FaHome className="menu-icon" />
                        <span>Home</span>
                    </Link>
                    <Link to="/community" className="menu-button">
                        <FaUsers className="menu-icon" />
                        <span>Comunidade</span>
                    </Link>
                    <Link to="/gallery" className="menu-button">
                        <FaImages className="menu-icon" />
                        <span>Galeria</span>
                    </Link>
                </div>

                <div className="menu-section middle">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                        />
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