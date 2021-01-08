import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Meta = ({ children, title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="ru" />
      <title>{title}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
      {children}
    </Helmet>
  );
};

export default Meta;
