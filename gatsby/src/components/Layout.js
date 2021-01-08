import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const theme = {
  black: '#262626',
  yellow: '#ffc600',
  lightgrey: '#efefef',
  grey: '#3a3a3a',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,900&amp;subset=cyrillic,cyrillic-ext"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export default Layout;

const StyledPage = styled.div`
  background: #fff;
  color: ${props => props.theme.black};
`;

const Content = styled.div`
  max-width: 900px;
  min-height: 35vw;
  padding: 6rem 1rem;
  margin: 0 auto;
`;
