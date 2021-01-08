const dotenv = require('dotenv');

dotenv.config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Fresh Blog`,
    siteUrl: `https://fresh.blog`,
    description: `Мой супер быстрый блог`,
    author: 'Vasily',
    vk: 'https://vk.com/freshblog',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'tkfekc8m',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
