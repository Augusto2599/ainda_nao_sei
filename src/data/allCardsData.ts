export const popularCardData = [
    { id: 'interstellar', type: 'movie', title: 'Interstellar', rating: 9.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png', genre: 'Ação', releaseDate: '2014-11-06', duration: '2h 49min', author: 'Christopher Nolan', country: 'EUA', boxOffice: '$701 Milhões' },
    { id: 'f1-drive-to-survive', type: 'series', title: 'Formula 1', rating: 9.2, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/F1.webp', genre: 'Drama', releaseDate: '2019-03-08', duration: '6 Temporadas', author: 'Netflix', country: 'Reino Unido', boxOffice: 'N/A' },
    { id: 'one-piece', type: 'anime', title: 'One Piece', rating: 9.8, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg', genre: 'Shounen', releaseDate: '1999-10-20', duration: '1000+ Episódios', author: 'Eiichiro Oda', country: 'Japão', boxOffice: 'N/A' },
    { id: 'dune', type: 'movie', title: 'Duna', rating: 9.4, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/3/39/Dune_2021_poster.jpg', genre: 'Aventura', releaseDate: '2021-10-14', duration: '2h 35min', author: 'Denis Villeneuve', country: 'EUA', boxOffice: '$402 Milhões' },
    { id: 'the-office', type: 'series', title: 'The Office', rating: 9.1, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/e6/The_Office_temporada_1_poster.jpg', genre: 'Comédia', releaseDate: '2005-03-24', duration: '9 Temporadas', author: 'Greg Daniels', country: 'EUA', boxOffice: 'N/A' },
    { id: 'attack-on-titan', type: 'anime', title: 'Attack on Titan', rating: 9.6, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/b/b5/Shingeki_no_Kyojin_manga_vol_1_cover.jpg', genre: 'Seinen', releaseDate: '2013-04-07', duration: '4 Temporadas', author: 'Hajime Isayama', country: 'Japão', boxOffice: 'N/A' },
];

export const newCardData = [
    { id: 'oppenheimer', type: 'movie', title: 'Oppenheimer', rating: 8.1, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/4/4a/Oppenheimer_poster.jpg', genre: 'Ficção Científica', releaseDate: '2023-07-20', duration: '3h 0min', author: 'Christopher Nolan', country: 'EUA', boxOffice: '$952 Milhões' },
    { id: 'fallout', type: 'series', title: 'Fallout', rating: 8.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/e3/Fallout_poster.jpg', genre: 'Suspense', releaseDate: '2024-04-10', duration: '1 Temporada', author: 'Geneva Robertson-Dworet', country: 'EUA', boxOffice: 'N/A' },
    { id: 'jujutsu-kaisen', type: 'anime', title: 'Jujutsu Kaisen', rating: 8.9, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Jujutsu_Kaisen_capa.jpg', genre: 'Isekai', releaseDate: '2020-10-03', duration: '2 Temporadas', author: 'Gege Akutami', country: 'Japão', boxOffice: 'N/A' },
];

export const movieCardData = [
    { id: 'the-godfather', type: 'movie', title: 'O Poderoso Chefão', rating: 9.2, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg', genre: 'Ação', releaseDate: '1972-03-24', duration: '2h 55min', author: 'Francis Ford Coppola', country: 'EUA', boxOffice: '$291 Milhões' },
    { id: 'pulp-fiction', type: 'movie', title: 'Pulp Fiction', rating: 8.9, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg', genre: 'Ficção Científica', releaseDate: '1994-10-14', duration: '2h 34min', author: 'Quentin Tarantino', country: 'EUA', boxOffice: '$213 Milhões' },
];

export const seriesCardData = [
    { id: 'breaking-bad', type: 'series', title: 'Breaking Bad', rating: 9.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/b/b5/Breaking_Bad_poster.jpg', genre: 'Drama', releaseDate: '2008-01-20', duration: '5 Temporadas', author: 'Vince Gilligan', country: 'EUA', boxOffice: 'N/A' },
    { id: 'game-of-thrones', type: 'series', title: 'Game of Thrones', rating: 9.2, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Game_of_Thrones_logo.jpg', genre: 'Comédia', releaseDate: '2011-04-17', duration: '8 Temporadas', author: 'David Benioff', country: 'EUA', boxOffice: 'N/A' },
];

export const animeCardData = [
    { id: 'death-note', type: 'anime', title: 'Death Note', rating: 9.0, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/1/12/Death_Note_vol._01.jpg', genre: 'Shounen', releaseDate: '2006-10-03', duration: '37 Episódios', author: 'Tsugumi Ohba', country: 'Japão', boxOffice: 'N/A' },
    { id: 'fullmetal-alchemist', type: 'anime', title: 'Fullmetal Alchemist', rating: 9.1, imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/93/Fullmetal_Alchemist_Brotherhood_Logo.jpg', genre: 'Slice of Life', releaseDate: '2009-04-05', duration: '64 Episódios', author: 'Hiromu Arakawa', country: 'Japão', boxOffice: 'N/A' },
];

// Combina todos os dados em uma única lista
export const allCardsData = [
    ...popularCardData,
    ...newCardData,
    ...movieCardData,
    ...seriesCardData,
    ...animeCardData
];

// Extrai opções únicas para os filtros
const getUniqueOptions = (key: keyof typeof allCardsData[0]) => {
    if (key === 'releaseDate') {
        const years = allCardsData
            .map(card => card.releaseDate ? new Date(card.releaseDate).getFullYear() : 0)
            .filter(year => year > 0);
        return [...new Set(years)].sort((a, b) => b - a).map(String);
    }
    // @ts-ignore
    const options = allCardsData.map(card => card[key]).filter(Boolean);
    // @ts-ignore
    return [...new Set(options)].sort();
};

export const filterOptions = {
    genres: getUniqueOptions('genre'),
    authors: getUniqueOptions('author'),
    countries: getUniqueOptions('country'),
    years: getUniqueOptions('releaseDate'),
    ratings: ['9', '8', '7'] // Opções para o filtro de rating
};