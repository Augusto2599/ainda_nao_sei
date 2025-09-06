import './App.css';
import Card from './components/Card/Card';
import MenuBar from './components/MenuBar/MenuBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const popularCardData = [
    { title: 'Interstellar', rating: 9.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png', genre: 'Ação', releaseDate: '2023-01-15', duration: '2h 10min', author: 'Diretor Famoso', country: 'EUA', boxOffice: '$300 Milhões' },
    { title: 'Formula 1', rating: 9.2, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/F1.webp', genre: 'Drama', releaseDate: '2022-03-22', duration: '5 Temporadas', author: 'Criador Renomado', country: 'Reino Unido', boxOffice: 'N/A' },
    { title: 'One Piece', rating: 9.8, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg', genre: 'Shounen', releaseDate: '2020-05-10', duration: '150 Episódios', author: 'Mangaká Lendário', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Popular 2', rating: 9.4, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Aventura', releaseDate: '2022-11-20', duration: '2h 20min', author: 'Diretor Visionário', country: 'Nova Zelândia', boxOffice: '$450 Milhões' },
    { title: 'Série Popular 2', rating: 9.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Comédia', releaseDate: '2021-08-12', duration: '3 Temporadas', author: 'Roteirista Genial', country: 'Canadá', boxOffice: 'N/A' },
    { title: 'Anime Popular 2', rating: 9.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Seinen', releaseDate: '2019-10-01', duration: '48 Episódios', author: 'Estúdio Clássico', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Popular 3', rating: 9.3, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ficção Científica', releaseDate: '2021-07-18', duration: '2h 15min', author: 'Diretor Inovador', country: 'EUA', boxOffice: '$380 Milhões' },
    { title: 'Série Popular 3', rating: 9.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Mistério', releaseDate: '2023-02-28', duration: '2 Temporadas', author: 'Autor Best-seller', country: 'Suécia', boxOffice: 'N/A' },
    { title: 'Anime Popular 3', rating: 9.7, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Slice of Life', releaseDate: '2022-04-15', duration: '24 Episódios', author: 'Diretor de Animação', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Popular 4', rating: 9.2, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Fantasia', releaseDate: '2020-12-25', duration: '2h 40min', author: 'Mestre da Fantasia', country: 'Reino Unido', boxOffice: '$550 Milhões' },
    { title: 'Série Popular 4', rating: 8.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Crime', releaseDate: '2020-10-05', duration: '4 Temporadas', author: 'Produtor Executivo', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Anime Popular 4', rating: 9.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Esporte', releaseDate: '2023-01-08', duration: '36 Episódios', author: 'Criador Original', country: 'Japão', boxOffice: 'N/A' },
  ];

  const newCardData = [
    { title: 'Filme Novo 1', rating: 8.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ficção Científica', releaseDate: '2024-08-15', duration: '2h 20min', author: 'Diretora Promissora', country: 'Canadá', boxOffice: '$50 Milhões' },
    { title: 'Série Nova 1', rating: 8.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Suspense', releaseDate: '2024-09-01', duration: '1 Temporada', author: 'Novo Talento', country: 'Austrália', boxOffice: 'N/A' },
    { title: 'Anime Novo 1', rating: 8.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Isekai', releaseDate: '2024-07-20', duration: '12 Episódios', author: 'Estúdio Inovador', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Novo 2', rating: 7.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Terror', releaseDate: '2024-10-31', duration: '1h 45min', author: 'Mestre do Horror', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série Nova 2', rating: 8.2, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Comédia Romântica', releaseDate: '2024-08-22', duration: '1 Temporada', author: 'Roteirista Estreante', country: 'França', boxOffice: 'N/A' },
    { title: 'Anime Novo 2', rating: 8.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Fantasia Sombria', releaseDate: '2024-09-15', duration: '13 Episódios', author: 'Light Novel Popular', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Novo 3', rating: 8.4, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Drama Histórico', releaseDate: '2024-11-05', duration: '2h 50min', author: 'Diretor Premiado', country: 'Reino Unido', boxOffice: 'N/A' },
    { title: 'Série Nova 3', rating: 8.7, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ação e Aventura', releaseDate: '2024-10-10', duration: '8 Episódios', author: 'Produtora de Hollywood', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Anime Novo 3', rating: 9.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Mecha', releaseDate: '2024-10-01', duration: '24 Episódios', author: 'Designer de Robôs', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Filme Novo 4', rating: 8.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Musical', releaseDate: '2024-12-20', duration: '2h 05min', author: 'Compositor Famoso', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série Nova 4', rating: 8.3, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Documental', releaseDate: '2024-09-05', duration: '6 Episódios', author: 'Jornalista Investigativo', country: 'Alemanha', boxOffice: 'N/A' },
    { title: 'Anime Novo 4', rating: 8.8, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Cyberpunk', releaseDate: '2024-11-11', duration: '10 Episódios', author: 'Estúdio de Animação', country: 'Japão', boxOffice: 'N/A' },
  ];

  const movieCardData = [
    { title: 'Filme de Exemplo 1', rating: 8.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ação', releaseDate: '2023-01-15', duration: '2h 10min', author: 'Diretor Famoso', country: 'EUA', boxOffice: '$150 Milhões' },
    { title: 'Filme de Exemplo 2', rating: 9.2, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ficção Científica', releaseDate: '2023-03-22', duration: '2h 30min', author: 'Diretora Renomada', country: 'Reino Unido', boxOffice: '$250 Milhões' },
    { title: 'Filme de Exemplo 3', rating: 7.8, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Comédia', releaseDate: '2023-05-10', duration: '1h 50min', author: 'Diretor Estreante', country: 'Brasil', boxOffice: '$20 Milhões' },
    { title: 'Filme de Exemplo 4', rating: 8.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Suspense', releaseDate: '2022-09-18', duration: '2h 05min', author: 'Mestre do Suspense', country: 'EUA', boxOffice: '$180 Milhões' },
    { title: 'Filme de Exemplo 5', rating: 8.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Animação', releaseDate: '2023-06-25', duration: '1h 40min', author: 'Estúdio de Animação', country: 'Japão', boxOffice: '$200 Milhões' },
    { title: 'Filme de Exemplo 6', rating: 8.3, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Romance', releaseDate: '2021-02-14', duration: '1h 55min', author: 'Diretora Sensível', country: 'França', boxOffice: '$90 Milhões' },
    { title: 'Filme de Exemplo 7', rating: 9.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Guerra', releaseDate: '2020-11-11', duration: '2h 45min', author: 'Historiador Militar', country: 'Reino Unido', boxOffice: '$320 Milhões' },
    { title: 'Filme de Exemplo 8', rating: 7.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Documentário', releaseDate: '2023-04-22', duration: '1h 30min', author: 'Cientista Renomado', country: 'Canadá', boxOffice: '$5 Milhões' },
    { title: 'Filme de Exemplo 9', rating: 8.7, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Policial', releaseDate: '2022-08-05', duration: '2h 25min', author: 'Ex-detetive', country: 'Coreia do Sul', boxOffice: '$120 Milhões' },
    { title: 'Filme de Exemplo 10', rating: 9.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Biografia', releaseDate: '2021-09-30', duration: '2h 35min', author: 'Jornalista Premiado', country: 'EUA', boxOffice: '$160 Milhões' },
    { title: 'Filme de Exemplo 11', rating: 8.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Aventura', releaseDate: '2023-12-15', duration: '2h 10min', author: 'Explorador Famoso', country: 'Austrália', boxOffice: '$210 Milhões' },
    { title: 'Filme de Exemplo 12', rating: 8.4, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Fantasia', releaseDate: '2020-07-07', duration: '2h 22min', author: 'Autor de Best-seller', country: 'Irlanda', boxOffice: '$280 Milhões' },
  ];

  const seriesCardData = [
    { title: 'Série de Exemplo 1', rating: 8.8, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Drama', releaseDate: '2022-01-15', duration: '4 Temporadas', author: 'Showrunner Experiente', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 2', rating: 9.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Comédia', releaseDate: '2021-06-20', duration: '6 Temporadas', author: 'Criador de Sucesso', country: 'Reino Unido', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 3', rating: 8.2, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Fantasia', releaseDate: '2023-09-10', duration: '2 Temporadas', author: 'Autor do Livro', country: 'Irlanda', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 4', rating: 8.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ficção Científica', releaseDate: '2020-03-15', duration: '3 Temporadas', author: 'Visionário da TV', country: 'Canadá', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 5', rating: 8.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Suspense Psicológico', releaseDate: '2022-10-28', duration: '1 Temporada', author: 'Mente Criminosa', country: 'Dinamarca', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 6', rating: 8.7, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Sitcom', releaseDate: '2019-09-22', duration: '8 Temporadas', author: 'Comediante Famoso', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 7', rating: 9.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Histórica', releaseDate: '2021-11-01', duration: '5 Temporadas', author: 'Consultor Histórico', country: 'Reino Unido', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 8', rating: 8.4, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Animação Adulta', releaseDate: '2023-07-21', duration: '2 Temporadas', author: 'Animador Irreverente', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 9', rating: 8.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Sobrenatural', releaseDate: '2020-01-31', duration: '3 Temporadas', author: 'Especialista em Ocultismo', country: 'Espanha', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 10', rating: 9.3, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Minissérie', releaseDate: '2023-05-19', duration: '8 Episódios', author: 'Diretor de Cinema', country: 'EUA', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 11', rating: 8.8, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Política', releaseDate: '2018-02-11', duration: '6 Temporadas', author: 'Cientista Político', country: 'Noruega', boxOffice: 'N/A' },
    { title: 'Série de Exemplo 12', rating: 8.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Adolescente', releaseDate: '2022-08-18', duration: '3 Temporadas', author: 'Escritor Jovem Adulto', country: 'EUA', boxOffice: 'N/A' },
  ];

  const animeCardData = [
    { title: 'Anime de Exemplo 1', rating: 9.1, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Shounen', releaseDate: '2021-04-01', duration: '100 Episódios', author: 'Estúdio Famoso', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 2', rating: 8.7, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Slice of Life', releaseDate: '2022-10-05', duration: '12 Episódios', author: 'Diretor de Arte', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 3', rating: 9.4, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Seinen', releaseDate: '2020-01-10', duration: '24 Episódios', author: 'Mangaká Premiado', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 4', rating: 8.9, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Isekai', releaseDate: '2023-07-07', duration: '12 Episódios', author: 'Web Novel de Sucesso', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 5', rating: 9.2, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Fantasia', releaseDate: '2022-04-03', duration: '25 Episódios', author: 'Criador de Mundo', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 6', rating: 8.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Comédia Romântica', releaseDate: '2023-01-08', duration: '13 Episódios', author: 'Especialista em Shoujo', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 7', rating: 9.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Psicológico', releaseDate: '2021-10-02', duration: '11 Episódios', author: 'Gênio do Suspense', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 8', rating: 8.8, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Ação', releaseDate: '2020-07-12', duration: '50 Episódios', author: 'Coreógrafo de Lutas', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 9', rating: 9.0, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Esporte', releaseDate: '2022-01-09', duration: '24 Episódios', author: 'Ex-atleta Profissional', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 10', rating: 9.6, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Aventura', releaseDate: '2019-04-06', duration: '148 Episódios', author: 'Explorador de Mundos', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 11', rating: 8.5, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Musical', releaseDate: '2023-04-10', duration: '12 Episódios', author: 'Compositor de Idols', country: 'Japão', boxOffice: 'N/A' },
    { title: 'Anime de Exemplo 12', rating: 9.3, imageUrl: 'https://via.placeholder.com/400x225', genre: 'Mistério', releaseDate: '2021-01-07', duration: '13 Episódios', author: 'Detetive de Histórias', country: 'Japão', boxOffice: 'N/A' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
    <div className="app-container">
      <MenuBar />
      <main className="main-content">
        <h1>Home</h1>
        <CardRow title="Populares" data={popularCardData} />
        <CardRow title="Novos" data={newCardData} />
        <CardRow title="Filmes" data={movieCardData} />
        <CardRow title="Séries" data={seriesCardData} />
        <CardRow title="Animes" data={animeCardData} />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Não Sei Ainda. Todos os direitos reservados.</p>
        <p>
          <a href="#">Termos de Serviço</a> | <a href="#">Política de Privacidade</a>
        </p>
      </footer>
    </div>
  );
}

export default App;