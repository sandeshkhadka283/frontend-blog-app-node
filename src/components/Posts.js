// src/components/Posts.js
import React from 'react';
import styles from './Posts.module.css';

function Posts({ posts }) {
    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {posts.length > 0 ? (
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
