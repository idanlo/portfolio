import React from 'react';
import ReactHelmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Helmet = ({ description, lang, meta }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const metaDescription = description || site.siteMetadata.description;

  return (
    <ReactHelmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate="%s"
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content:
            'https://raw.githubusercontent.com/idanlo/portfolio/master/media/IdanLo.png',
        },
        {
          name: 'twitter:image:src',
          content:
            'https://raw.githubusercontent.com/idanlo/portfolio/master/media/IdanLo.png',
        },
      ].concat(meta)}
    >
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </ReactHelmet>
  );
};

Helmet.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Helmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Helmet;
