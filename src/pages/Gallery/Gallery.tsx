import { useState, useCallback } from 'react';
import Card from '../../components/Card/Card';
import FilterBar from '../../components/FilterBar/FilterBar';
import { allCardsData } from '../../data/allCardsData';
import './Gallery.css';

const Gallery = () => {
    const [filteredData, setFilteredData] = useState(allCardsData);

    const handleFilterChange = useCallback((filters: {
        genre: string;
        author: string;
        country: string;
        year: string;
        rating: string; 
    }) => {
        let data = allCardsData;

        // Filtro por Gênero
        if (filters.genre !== 'all') {
            data = data.filter(card => card.genre === filters.genre);
        }

        // Filtro por Autor/Studio
        if (filters.author !== 'all') {
            data = data.filter(card => card.author === filters.author);
        }
        
        // Filtro por País
        if (filters.country !== 'all') {
            data = data.filter(card => card.country === filters.country);
        }
        
        // Filtro por Ano de Lançamento
        if (filters.year !== 'all') {
            data = data.filter(card => {
                const cardYear = card.releaseDate ? new Date(card.releaseDate).getFullYear().toString() : '';
                return cardYear === filters.year;
            });
        }
        
        // Filtro por Rating
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating); // Extrai o número da string (ex: "8+")
            data = data.filter(card => card.rating >= minRating);
        }

        setFilteredData(data);
    }, []);

    return (
        <div className="gallery-container">
            <FilterBar onFilterChange={handleFilterChange} />
            <div className="gallery-grid">
                {filteredData.length > 0 ? (
                    filteredData.map((card, index) => (
                        <Card key={`${card.title}-${index}`} {...card} />
                    ))
                ) : (
                    <p className="no-results-message">Nenhum resultado encontrado para os filtros selecionados.</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;