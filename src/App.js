import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Posts from './components/Posts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPost from './components/addPost';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts') // Ensure this is the correct endpoint URL
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const addPostHandler = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<Posts posts={posts} />} />
            </Routes>
        </Router>
    );
}

export default App;
