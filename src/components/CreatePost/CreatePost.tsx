import { useState } from 'react';
import './CreatePost.css';
import { FaPhotoVideo, FaListAlt, FaTag } from 'react-icons/fa';

interface CreatePostProps {
    onPost: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPost }) => {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (content.trim()) {
            onPost(content);
            setContent(''); // Limpa o campo após a postagem
        }
    };

    return (
        <div className="create-post-container">
            <div className="create-post-header">
                <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
                <textarea
                    className="create-post-input"
                    placeholder="No que você está pensando?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="create-post-actions">
                <div className="action-buttons-left">
                    <button className="action-button">
                        <FaPhotoVideo className="action-icon" />
                        <span>Foto/Vídeo</span>
                    </button>
                    <button className="action-button">
                        <FaListAlt className="action-icon" />
                        <span>Lista</span>
                    </button>
                    <div className="action-button tag-button-container">
                        <div className="tag-button">
                            <FaTag className="action-icon" />
                            <span>Marcar como</span>
                        </div>
                        <div className="tag-options">
                            <button>Review</button>
                            <button>Comentário</button>
                            <button>Spoiler</button>
                        </div>
                    </div>
                </div>
                <button className="submit-post-button" onClick={handleSubmit}>Publicar</button>
            </div>
        </div>
    );
};

export default CreatePost;