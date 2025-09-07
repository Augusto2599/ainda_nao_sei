import './Post.css';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';

export interface PostProps {
    id: number;
    author: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
}

const Post: React.FC<PostProps> = ({ author, time, content, likes, comments }) => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src="https://via.placeholder.com/40" alt="User" className="post-avatar" />
                <div className="post-author-info">
                    <span className="post-author">{author}</span>
                    <span className="post-time">{time}</span>
                </div>
            </div>
            <div className="post-content">
                <p>{content}</p>
            </div>
            <div className="post-footer">
                <button className="post-action-button">
                    <FaThumbsUp />
                    <span>{likes} Curtir</span>
                </button>
                <button className="post-action-button">
                    <FaComment />
                    <span>{comments} Comentar</span>
                </button>
                <button className="post-action-button">
                    <FaThumbsDown />
                    <span>Não Curtir</span>
                </button>
            </div>
        </div>
    );
};

export default Post;