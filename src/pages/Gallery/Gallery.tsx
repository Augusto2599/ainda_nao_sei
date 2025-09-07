import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import FilterBar from '../../components/FilterBar/FilterBar';
import Pagination from '../../components/Pagination/Pagination'; // Importar o novo componente
import { allCardsData } from '../../data/allCardsData';
import './Gallery.css';

const ITEMS_PER_PAGE = 12; // Defina quantos itens por página

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Gallery = () => {
    const query = useQuery();
    const initialGenre = query.get('genre') || 'all';

    const [filteredData, setFilteredData] = useState(allCardsData);
    const [currentPage, setCurrentPage] = useState(1);

    const applyFilters = useCallback((filters: {
        genre: string;
        author: string;
        country: string;
        year: string;
        rating: string;
    }) => {
        let data = allCardsData;

        if (filters.genre !== 'all') data = data.filter(card => card.genre === filters.genre);
        if (filters.author !== 'all') data = data.filter(card => card.author === filters.author);
        if (filters.country !== 'all') data = data.filter(card => card.country === filters.country);
        if (filters.year !== 'all') {
            data = data.filter(card => new Date(card.releaseDate!).getFullYear().toString() === filters.year);
        }
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            data = data.filter(card => card.rating >= minRating);
        }

        setFilteredData(data);
        setCurrentPage(1); // Reseta para a primeira página ao aplicar novos filtros
    }, []);

    // Calcula os itens da página atual
    const currentGridData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredData]);

    // Calcula o total de páginas
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    return (
        <div className="gallery-container">
            <FilterBar onFilterChange={applyFilters} initialGenre={initialGenre} />
            <div className="gallery-grid">
                {currentGridData.length > 0 ? (
                    currentGridData.map((card) => (
                        <Card key={card.id} {...card} />
                    ))
                ) : (
                    <p className="no-results-message">Nenhum resultado encontrado para os filtros selecionados.</p>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
};

export default Gallery;