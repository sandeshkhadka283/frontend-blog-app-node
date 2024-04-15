// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import AddPost from './components/addPost';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const addPostHandler = (post) => {
        setPosts(prevPosts => [post, ...prevPosts]);
    };

    return (
        <div>
            <AddPost onAddPost={addPostHandler} />
            <Posts posts={posts} />
        </div>
    );
}

export default App;
