import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Posts.module.css';
import AddPost from './addPost';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;



function Posts({ initialPosts = [] }) {

    const [posts, setPosts] = useState(initialPosts);

    // Use useEffect to fetch posts only once or based on specific conditions
    useEffect(() => {
        if (!posts.length) {  // Simplified check, assumes `posts` is always an array
            fetchPosts();
        }
    }, []);  // Empty dependency array ensures this runs only once on mount

    const fetchPosts = () => {
        axios.get(`${API_BASE_URL}api/posts`)  // Corrected URL concatenation
            .then(response => {
                setPosts(response.data || []);  // Set posts if data is available
            })
            .catch(error => {
                console.error('Error fetching posts:', error);  // Log errors to the console
                setPosts([]);  // Reset posts on error
            });
    };
    

    const addPostHandler = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <div className={styles.container}>
            <AddPost onAddPost={addPostHandler} />
            <h1>Posts</h1>
            {posts.length ? (
                posts.map(post => (
                    <div key={post._id} className={styles.post}>
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.content}>{post.content}</p>
                    </div>
                ))
            ) : (
                <p className={styles.noPosts}>No posts available</p>
            )}
        </div>
    );
}

export default Posts;
