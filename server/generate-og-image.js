// generateOgImage.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateOgImage(post) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body {
          width: 1200px;
          height: 630px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          background-color: #fafafa;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #dbdbdb;
          background: #fff;
        }
        .title {
          font-size: 48px;
          margin: 20px 0;
        }
        .content {
          font-size: 24px;
          margin: 20px 0;
        }
        .image {
          width: 500px;
          height: 300px;
          object-fit: cover;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="title">${post.title}</div>
        <div class="content">${post.content}</div>
        <img class="image" src="${post.image}" alt="${post.title}" />
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);

  const filePath = path.join(__dirname, `public/og-images/${post.id}.png`);
  await page.screenshot({ path: filePath });
  await browser.close();

  return filePath;
}

module.exports = generateOgImage;
