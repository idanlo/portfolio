const colors = require('./colors');

module.exports = {
  siteMetadata: {
    title: 'Idan Lottan | Portfolio',
    description: 'Web Developer - React, Node, and more',
    author: 'Idan Lottan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['cabin', 'Open Sans'],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Idan Lottan Portfolio',
        short_name: 'Idan Lottan',
        start_url: '/',
        background_color: colors.background,
        theme_color: colors.primary,
        display: 'minimal-ui',
        icon: 'media/IdanLo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
