import './App.css';
import Card from './components/Card/Card';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  const cardData = [
    {
      title: 'Filme de Exemplo 1',
      rating: 8.5,
      imageUrl: 'https://via.placeholder.com/300x450',
      genre: 'Ação',
      releaseDate: '2023-01-15',
      duration: '2h 10min',
      author: 'Diretor Famoso',
      country: 'EUA',
      boxOffice: '$150 Milhões',
    },
    {
      title: 'Filme de Exemplo 2',
      rating: 9.2,
      imageUrl: 'https://via.placeholder.com/300x450',
      genre: 'Ficção Científica',
      releaseDate: '2023-03-22',
      duration: '2h 30min',
      author: 'Diretora Renomada',
      country: 'Reino Unido',
      boxOffice: '$250 Milhões',
    },
    {
      title: 'Filme de Exemplo 3',
      rating: 7.8,
      imageUrl: 'https://via.placeholder.com/300x450',
      genre: 'Comédia',
      releaseDate: '2023-05-10',
      duration: '1h 50min',
      author: 'Diretor Estreante',
      country: 'Brasil',
      boxOffice: '$20 Milhões',
    },
  ];

  return (
    <div className="app-container">
      <MenuBar />
      <main className="main-content">
        <h1>Home</h1>
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              rating={card.rating}
              imageUrl={card.imageUrl}
              genre={card.genre}
              releaseDate={card.releaseDate}
              duration={card.duration}
              author={card.author}
              country={card.country}
              boxOffice={card.boxOffice}
            />
          ))}
        </div>
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