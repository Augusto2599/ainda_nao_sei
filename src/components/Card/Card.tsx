import React from 'react';
import './Card.css';
import { FaStar, FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa';

interface CardProps {
    title: string;
    rating: number;
    imageUrl: string;
    genre?: string;
    releaseDate?: string;
    duration?: string;
    author?: string;
    country?: string;
    boxOffice?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    rating,
    imageUrl,
    genre,
    releaseDate,
    duration,
    author,
    country,
    boxOffice,
}) => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
                <div className="card-rating">
                    <FaStar color="#FFD700" />
                    <span>{rating}</span>
                </div>
            </div>

            <div className="card-body">
                <img src={imageUrl} alt={title} className="card-image" />
            </div>

            {/* Novo bloco para os detalhes que aparecerão no hover */}
            <div className="card-details">
                <p><strong>Gênero:</strong> {genre}</p>
                <p><strong>Lançamento:</strong> {releaseDate}</p>
                <p><strong>Duração:</strong> {duration}</p>
                <p><strong>Autor:</strong> {author}</p>
                <p><strong>País:</strong> {country}</p>
                <p><strong>Bilheteria:</strong> {boxOffice}</p>
            </div>

            <div className="card-footer">
                <button className="icon-button">
                    <FaHeart />
                </button>
                <button className="icon-button">
                    <FaShareAlt />
                </button>
                <button className="icon-button">
                    <FaBookmark />
                </button>
            </div>
        </div>
    );
};

export default Card;