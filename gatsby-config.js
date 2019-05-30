const manifestConfig = require('./manifest-config');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Idan Lottan | Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['cabin', 'Open Sans'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
};
