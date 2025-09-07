import './SideBar.css';
import { FaRegUser, FaBookmark, FaHeart, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

// Definindo os tipos de ordenação possíveis
export type SortType = 'recentes' | 'curtidos';

interface SideBarProps {
    activeSort: SortType;
    onSortChange: (sortType: SortType) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activeSort, onSortChange }) => {
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
                <h3 className="sidebar-title">Ordenar por</h3>
                <ul className="sidebar-list">
                    <li
                        className={`sidebar-item filter-option ${activeSort === 'curtidos' ? 'active' : ''}`}
                        onClick={() => onSortChange('curtidos')}
                    >
                        <FaSortAmountUp />
                        <span>Mais Curtidos</span>
                    </li>
                    <li
                        className={`sidebar-item filter-option ${activeSort === 'recentes' ? 'active' : ''}`}
                        onClick={() => onSortChange('recentes')}
                    >
                        <FaSortAmountDown />
                        <span>Mais Recentes</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;