import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import FilterBar from '../../components/FilterBar/FilterBar';
import { allCardsData } from '../../data/allCardsData';
import './Gallery.css';

// Função para extrair parâmetros da URL
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Gallery = () => {
    const query = useQuery();
    const initialGenre = query.get('genre') || 'all';

    const [filteredData, setFilteredData] = useState(allCardsData);

    const applyFilters = useCallback((filters: {
        genre: string;
        author: string;
        country: string;
        year: string;
        rating: string;
    }) => {
        let data = allCardsData;

        if (filters.genre !== 'all') {
            data = data.filter(card => card.genre === filters.genre);
        }
        if (filters.author !== 'all') {
            data = data.filter(card => card.author === filters.author);
        }
        if (filters.country !== 'all') {
            data = data.filter(card => card.country === filters.country);
        }
        if (filters.year !== 'all') {
            data = data.filter(card => {
                const cardYear = card.releaseDate ? new Date(card.releaseDate).getFullYear().toString() : '';
                return cardYear === filters.year;
            });
        }
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            data = data.filter(card => card.rating >= minRating);
        }

        setFilteredData(data);
    }, []);

    return (
        <div className="gallery-container">
            <FilterBar onFilterChange={applyFilters} initialGenre={initialGenre} />
            <div className="gallery-grid">
                {filteredData.length > 0 ? (
                    filteredData.map((card) => (
                        <Card key={card.id} {...card} />
                    ))
                ) : (
                    <p className="no-results-message">Nenhum resultado encontrado para os filtros selecionados.</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;