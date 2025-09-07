import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import SideBar from '../../components/SideBar/SideBar';
import './Community.css';

const Community = () => {
    // Dados de exemplo para os posts
    const posts = [
        {
            author: 'Augusto',
            time: '2h',
            content: 'Acabei de assistir Interstellar, que filmaço!',
            likes: 15,
            comments: 5,
        },
        {
            author: 'Beatriz',
            time: '5h',
            content: 'Recomendem animes de comédia, por favor!',
            likes: 8,
            comments: 12,
        },
        {
            author: 'Carlos',
            time: '1d',
            content: 'Minha lista de melhores filmes de 2024 até agora...',
            likes: 32,
            comments: 18,
        },
    ];

    return (
        <div className="community-container">
            <SideBar />
            <div className="community-feed">
                <CreatePost />
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Community;