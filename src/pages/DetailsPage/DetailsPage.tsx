import { useParams } from 'react-router-dom';
import { allCardsData } from '../../data/allCardsData';
import './DetailsPage.css';

const DetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const item = allCardsData.find(card => card.id === id);

    if (!item) {
        return <div className="details-container"><p>Item não encontrado!</p></div>;
    }

    return (
        <div className="details-container">
            <div className="details-card">
                <img src={item.imageUrl} alt={item.title} className="details-image" />
                <div className="details-info">
                    <h1 className="details-title">{item.title}</h1>
                    <div className="details-meta">
                        <span>⭐ {item.rating}</span>
                        <span>{item.releaseDate}</span>
                        <span>{item.duration}</span>
                    </div>
                    <p className="details-genre"><strong>Gênero:</strong> {item.genre}</p>
                    <p className="details-author"><strong>{item.type === 'anime' || item.type === 'series' ? 'Criador' : 'Diretor'}:</strong> {item.author}</p>
                    <p className="details-country"><strong>País:</strong> {item.country}</p>
                    {item.boxOffice !== 'N/A' && <p className="details-boxoffice"><strong>Bilheteria:</strong> {item.boxOffice}</p>}
                    <p className="details-synopsis">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;