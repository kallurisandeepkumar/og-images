// src/components/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post content.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more posts here
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.content} />
      <meta property="og:image" content={post.image} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <img src={post.image} alt={post.title} />
    </div>
  );
};

export default PostDetail;
