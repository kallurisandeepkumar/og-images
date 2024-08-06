// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const generateOgImage = require('./generate-og-image');
const app = express();
const PORT = process.env.PORT || 5000;

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post content.',
    image: 'https://via.placeholder.com/300',
  },
  // Add more posts here
];

app.use(express.static('public'));

app.get('/post/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  const ogImagePath = path.join(__dirname, `public/og-images/${post.id}.png`);
  if (!fs.existsSync(ogImagePath)) {
    await generateOgImage(post);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="og:title" content="${post.title}" />
      <meta property="og:description" content="${post.content}" />
      <meta property="og:image" content="http://localhost:5000/og-images/${post.id}.png" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="http://localhost:5000/post/${post.id}" />
      <meta property="og:site_name" content="Social Media App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${post.title}" />
      <meta name="twitter:description" content="${post.content}" />
      <meta name="twitter:image" content="http://localhost:5000/og-images/${post.id}.png" />
      <title>${post.title}</title>
    </head>
    <body>
      <h1>${post.title}</h1>
      <p>${post.content}</p>
      <img src="${post.image}" alt="${post.title}" />
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
