import React from 'react';
import { Link } from 'react-router-dom'; // Importar o Link
import './Card.css';
import { FaStar, FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa';

interface CardProps {
    id: string; // Adicionar id
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
    id, // Adicionar id
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
        <Link to={`/details/${id}`} className="card-container"> {/* Envolver com Link */}
            <div className="card-content-wrapper">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-rating">
                        <FaStar color="#FFD700" />
                        <span>{rating}</span>
                    </div>
                </div>

                <div className="card-body">
                    <img src={imageUrl} alt={title} className="card-image" />
                </div>

                <div className="card-details">
                    {genre && <p><strong>Gênero:</strong> <span>{genre}</span></p>}
                    {releaseDate && <p><strong>Lançamento:</strong> <span>{releaseDate}</span></p>}
                    {duration && <p><strong>Duração:</strong> <span>{duration}</span></p>}
                    {author && <p><strong>Autor:</strong> <span>{author}</span></p>}
                    {country && <p><strong>País:</strong> <span>{country}</span></p>}
                    {boxOffice && <p><strong>Bilheteria:</strong> <span>{boxOffice}</span></p>}
                </div>
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
        </Link>
    );
};

export default Card;