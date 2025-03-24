import { useState, useContext } from 'react';
import { MyContext } from '../../context/context';
import actionTypes from '../../reducer/actionTypes';

function NewPostForm() {
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostMedia, setNewPostMedia] = useState(null);
    const [newPostMediaPreview, setNewPostMediaPreview] = useState(null);
    const { dispatch } = useContext(MyContext);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            content: newPostContent,
            media: newPostMedia,
            mediaType: newPostMedia ? newPostMedia.type : null,
            comments: [],
            likes: 0
        };
        dispatch({ type: actionTypes.ADD_POST, payload: newPost });
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
        <form onSubmit={handlePostSubmit} className="new-post-form NewPostForm">
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
    );
}

export default NewPostForm;