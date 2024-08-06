// src/components/PostFeed.js
import React from 'react';
import Post from './Post';
import './PostFeed.css';

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post content.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more posts here
];

const PostFeed = () => {
  return (
    <div className="post-feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
