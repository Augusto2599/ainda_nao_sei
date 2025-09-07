import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import { popularCardData, newCardData, movieCardData, seriesCardData, animeCardData } from '../../data/allCardsData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';

const Home = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            { breakpoint: 1600, settings: { slidesToShow: 5, slidesToScroll: 2 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    const CardRow = ({ title, data }: { title: string, data: any[] }) => (
        <div className="card-row">
            <h2>{title}</h2>
            <div className="cards-carousel">
                <Slider {...settings} infinite={data.length > settings.slidesToShow}>
                    {data.map((card) => <Card key={card.title} {...card} />)}
                </Slider>
            </div>
        </div>
    );

    return (
        <>
            <h1>Home</h1>
            <CardRow title="Populares" data={popularCardData} />
            <CardRow title="Novos" data={newCardData} />
            <CardRow title="Filmes" data={movieCardData} />
            <CardRow title="Séries" data={seriesCardData} />
            <CardRow title="Animes" data={animeCardData} />
        </>
    );
}

export default Home;