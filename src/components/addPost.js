// src/components/AddPost.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddPost.module.css';

function AddPost({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const postData = { title, content };
            const response = await axios.post('http://localhost:3000/posts/createpost', postData);
            onAddPost(response.data); // Add to posts list immediately
            setTitle('');
            setContent('');
            alert('Post added successfully!');
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post, check the console for more information.');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Add a New Post</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPost;
