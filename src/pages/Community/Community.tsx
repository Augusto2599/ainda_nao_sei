import { useState } from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post, { type PostProps } from '../../components/Post/Post';
import SideBar from '../../components/SideBar/SideBar';
import './Community.css';

const initialPosts: Omit<PostProps, 'onLike'>[] = [
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
    const [posts, setPosts] = useState(initialPosts);

    const handleCreatePost = (content: string) => {
        const newPost = {
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
        setPosts(posts.map(post => {
            if (post.id === postId) {
                // Simplesmente incrementa. Uma implementação real poderia verificar se já foi curtido.
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        }));
    };

    return (
        <div className="community-container">
            <SideBar />
            <div className="community-feed">
                <CreatePost onPost={handleCreatePost} />
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        {...post}
                        onLike={handleLikePost} // Passa a função para o componente Post
                    />
                ))}
            </div>
        </div>
    );
};

export default Community;