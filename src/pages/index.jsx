import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import theme from '../styles/theme';
import Page from '../components/Page';

import GlobalStyle from '../styles/globalStyle';
import Info from '../components/Info';
import SEO from '../components/SEO';
import GitHub from '../components/GitHub';
import LinkedIn from '../components/LinkedIn';

const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  text-align: center;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SEO
        title="andersnylund"
        keywords={['software', 'developer', 'portfolio']}
        description="Software developer portfolio"
      />
      <Page>
        <Header />
        <Content>
          <Info />
          <Items>
            <GitHub />
            <LinkedIn />
          </Items>
        </Content>
        <Footer />
      </Page>
    </>
  </ThemeProvider>
);

export default IndexPage;
