import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Page from '../components/Page';
import Header from '../components/Header';

const Section = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  h1 {
    font-family: 'Pacifico';
    text-shadow: 2px 2px 3px ${props => props.theme.grey};
  }
`;

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Page>
        <Header />
        <Section>
          <h1>404</h1>
          <p>You hit a route that doesn&apos;t exist!</p>
        </Section>
      </Page>
    </>
  </ThemeProvider>
);

export default NotFoundPage;
