// src/App.js
import React from 'react';
import { ashRouter as Router, Route, Routes } from 'react-router-dom';
import PostFeed from './components/PostFeed';
import PostDetail from './components/PostDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PostFeed/>} />
          <Route path="/post/:id" element={<PostDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
