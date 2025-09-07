import { useState, useMemo } from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post, { type PostProps } from '../../components/Post/Post';
import SideBar, { type SortType } from '../../components/SideBar/SideBar';
import './Community.css';

// Removendo 'onLike' da tipagem inicial para simplificar
type PostData = Omit<PostProps, 'onLike'>;

const initialPosts: PostData[] = [
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
    const [posts, setPosts] = useState<PostData[]>(initialPosts);
    const [activeSort, setActiveSort] = useState<SortType>('recentes');

    const handleCreatePost = (content: string) => {
        const newPost: PostData = {
            id: Date.now(),
            author: 'Usuário Atual',
            time: 'Agora',
            content: content,
            likes: 0,
            comments: 0,
        };
        setPosts([newPost, ...posts]);
    };

    const handleLikePost = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    // Ordena os posts com base no filtro ativo
    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) => {
            if (activeSort === 'curtidos') {
                return b.likes - a.likes; // Mais curtidos primeiro
            }
            // 'recentes' é o padrão
            return b.id - a.id; // Posts mais novos (maior id) primeiro
        });
    }, [posts, activeSort]);

    return (
        <div className="community-container">
            <SideBar activeSort={activeSort} onSortChange={setActiveSort} />
            <div className="community-feed">
                <CreatePost onPost={handleCreatePost} />
                {sortedPosts.map((post) => (
                    <Post
                        key={post.id}
                        {...post}
                        onLike={handleLikePost}
                    />
                ))}
            </div>
        </div>
    );
};

export default Community;