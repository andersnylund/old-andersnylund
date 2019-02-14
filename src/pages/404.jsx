import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Page from '../components/Page';
import Header from '../components/Header';

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Page>
        <Header />
      </Page>
    </>
  </ThemeProvider>
);

export default NotFoundPage;
