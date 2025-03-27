import React, { useState } from 'react';
import './Feed.css';
import Post from './Post';
import CreadHeader from './CreadHeader';
import { FiUser, FiBookmark, FiFileText, FiSettings, FiPlusCircle } from 'react-icons/fi';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostMedia, setNewPostMedia] = useState(null);
    const [newPostMediaPreview, setNewPostMediaPreview] = useState(null);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            content: newPostContent,
            media: newPostMedia,
            mediaType: newPostMedia ? newPostMedia.type : null,
            comments: [],
            likes: 0
        };
        setPosts([...posts, newPost]);
        setNewPostContent("");
        setNewPostMedia(null);
        setNewPostMediaPreview(null);
    };

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        setNewPostMedia(file);
        setNewPostMediaPreview(URL.createObjectURL(file));
    };

    return (
        <div className="Feed">
            <CreadHeader />
            <div className="feed-container">
                {/* Columna izquierda */}
                <div className="left-column">
                    <div className="menu-item">
                        <FiUser className="menu-icon" />
                        Perfil
                    </div>
                    <div className="menu-item">
                        <FiBookmark className="menu-icon" />
                        Guardados
                    </div>
                    <div className="menu-item">
                        <FiFileText className="menu-icon" />
                        Notas
                    </div>
                    <div className="menu-item">
                        <FiSettings className="menu-icon" />
                        Configuración
                    </div>
                    <div className="menu-item">
                        <FiPlusCircle className="menu-icon" />
                        Más
                    </div>
                </div>

                {/* Columna central */}
                <div className="middle-column">
                    <form onSubmit={handlePostSubmit} className="new-post-form">
                        <textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="¿Qué estás pensando?"
                            className="new-post-input"
                        />
                        {newPostMediaPreview && (
                            newPostMedia.type.startsWith('video/') ? (
                                <video controls className="media-preview">
                                    <source src={newPostMediaPreview} type={newPostMedia.type} />
                                </video>
                            ) : (
                                <img src={newPostMediaPreview} alt="Preview" className="media-preview" />
                            )
                        )}
                        <div className="new-post-actions">
                            <label className="new-post-media-label">
                                Adjuntar archivo
                                <input 
                                    type="file" 
                                    accept="image/*,video/*" 
                                    onChange={handleMediaChange} 
                                    className="new-post-media-input"
                                />
                            </label>
                            <button 
                                type="submit" 
                                className={`new-post-submit ${newPostContent || newPostMedia ? '' : 'disabled'}`}
                                disabled={!newPostContent && !newPostMedia}
                            >
                                Publicar
                            </button>
                        </div>
                    </form>
                    <div className="posts-container">
                        {posts.map(post => (
                            <Post key={post.id} post={post} setPosts={setPosts} posts={posts} />
                        ))}
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="right-column">
                    {/* Espacio vacío para contenido adicional */}
                </div>
            </div>
        </div>
    );
}

export default Feed;
