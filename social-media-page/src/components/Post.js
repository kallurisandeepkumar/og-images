// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  const shareUrl = `https://og-server-6qgqab7ft-kallurisandeepkumars-projects.vercel.app/${post.id}`;

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src="https://via.placeholder.com/50" alt="User Avatar" />
        <span className="username">User Name</span>
      </div>
      <img className="post-image" src={post.image} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
      <button className="share-button" onClick={() => navigator.clipboard.writeText(shareUrl)}>Share</button>
    </div>
  );
};

export default Post;
