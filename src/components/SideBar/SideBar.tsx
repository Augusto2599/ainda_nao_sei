import './SideBar.css';
import { FaRegUser, FaBookmark, FaHeart, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const SideBar = () => {
    return (
        <aside className="sidebar-container">
            <div className="sidebar-section">
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <FaRegUser />
                        <span>Meus Posts</span>
                    </li>
                    <li className="sidebar-item">
                        <FaBookmark />
                        <span>Meus Salvos</span>
                    </li>
                    <li className="sidebar-item">
                        <FaHeart />
                        <span>Minhas Curtidas</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Filtrar por</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-item filter-option">
                        <FaSortAmountUp />
                        <span>Mais Curtidos</span>
                    </li>
                    <li className="sidebar-item filter-option">
                        <FaSortAmountDown />
                        <span>Mais Recentes</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;