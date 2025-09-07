import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { allCardsData } from '../../data/allCardsData';
import './SearchPage.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
    const query = useQuery();
    const searchTerm = query.get('q')?.toLowerCase() || '';

    const searchResults = allCardsData.filter(card =>
        card.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="search-page-container">
            <h1 className="search-page-title">
                Resultados para: <span>"{searchTerm}"</span>
            </h1>
            <div className="search-results-grid">
                {searchResults.length > 0 ? (
                    searchResults.map((card) => (
                        <Card key={card.id} {...card} />
                    ))
                ) : (
                    <p className="no-results-message">Nenhum resultado encontrado para a sua busca.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;