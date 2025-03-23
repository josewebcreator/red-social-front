import React, { useState } from 'react';
import './Feed.css';
import Post from './Post';

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
            <div className="feed-container">
                <div className="left-column">
                    {/* Contenido adicional para la columna izquierda */}
                </div>
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
                <div className="right-column">
                    {/* Contenido adicional para la columna derecha */}
                </div>
            </div>
        </div>
    );
}

export default Feed;
