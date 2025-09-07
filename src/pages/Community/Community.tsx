import { useState } from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
// A linha abaixo foi corrigida
import Post, { type PostProps } from '../../components/Post/Post';
import SideBar from '../../components/SideBar/SideBar';
import './Community.css';

// Dados de exemplo iniciais
const initialPosts: PostProps[] = [
    {
        id: 3,
        author: 'Carlos',
        time: '1d',
        content: 'Minha lista de melhores filmes de 2024 até agora...',
        likes: 32,
        comments: 18,
    },
    {
        id: 2,
        author: 'Beatriz',
        time: '5h',
        content: 'Recomendem animes de comédia, por favor!',
        likes: 8,
        comments: 12,
    },
    {
        id: 1,
        author: 'Augusto',
        time: '2h',
        content: 'Acabei de assistir Interstellar, que filmaço!',
        likes: 15,
        comments: 5,
    },
];

const Community = () => {
    const [posts, setPosts] = useState<PostProps[]>(initialPosts);

    const handleCreatePost = (content: string) => {
        const newPost: PostProps = {
            id: Date.now(), // ID único baseado no tempo
            author: 'Usuário Atual', // Nome do usuário logado (placeholder)
            time: 'Agora',
            content: content,
            likes: 0,
            comments: 0,
        };
        setPosts([newPost, ...posts]); // Adiciona o novo post no início da lista
    };

    return (
        <div className="community-container">
            <SideBar />
            <div className="community-feed">
                <CreatePost onPost={handleCreatePost} />
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Community;