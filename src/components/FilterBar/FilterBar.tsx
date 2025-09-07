import React, { useState, useEffect } from 'react';
import { filterOptions } from '../../data/allCardsData';
import './FilterBar.css';

interface FilterValues {
    genre: string;
    author: string;
    country: string;
    year: string;
    rating: string;
}

interface FilterBarProps {
    onFilterChange: (filters: FilterValues) => void;
    initialGenre?: string; // Prop opcional para o gênero inicial
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, initialGenre = 'all' }) => {
    const [filters, setFilters] = useState<FilterValues>({
        genre: initialGenre, // Usar o valor inicial
        author: 'all',
        country: 'all',
        year: 'all',
        rating: 'all',
    });

    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="filter-bar-container">
            {/* Filtro de Gênero */}
            <div className="filter-group">
                <label htmlFor="genre">Gênero</label>
                <select id="genre" name="genre" value={filters.genre} onChange={handleChange}>
                    <option value="all">Todos</option>
                    {filterOptions.genres.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
            </div>

            {/* Filtro de Autor/Studio */}
            <div className="filter-group">
                <label htmlFor="author">Autor/Studio</label>
                <select id="author" name="author" value={filters.author} onChange={handleChange}>
                    <option value="all">Todos</option>
                    {filterOptions.authors.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
            </div>

            {/* Filtro de País */}
            <div className="filter-group">
                <label htmlFor="country">País</label>
                <select id="country" name="country" value={filters.country} onChange={handleChange}>
                    <option value="all">Todos</option>
                    {filterOptions.countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

            {/* Filtro de Ano */}
            <div className="filter-group">
                <label htmlFor="year">Ano de Lançamento</label>
                <select id="year" name="year" value={filters.year} onChange={handleChange}>
                    <option value="all">Todos</option>
                    {filterOptions.years.map(y => <option key={String(y)} value={String(y)}>{y}</option>)}
                </select>
            </div>

            {/* Filtro de Rating */}
            <div className="filter-group">
                <label htmlFor="rating">Rating</label>
                <select id="rating" name="rating" value={filters.rating} onChange={handleChange}>
                    <option value="all">Todos</option>
                    {filterOptions.ratings.map(r => <option key={r} value={r}>A partir de {r}+</option>)}
                </select>
            </div>
        </div>
    );
};

export default FilterBar;