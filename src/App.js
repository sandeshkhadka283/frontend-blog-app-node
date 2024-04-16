// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import AddPost from './components/addPost';
import LandingPage from './components/landingPage';


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
            <LandingPage/>
          
        </div>
    );
}

export default App;
