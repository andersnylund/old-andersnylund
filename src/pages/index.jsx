import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import Hero from '../components/Hero';
import theme from '../styles/theme';
import Page from '../components/Page';

import GlobalStyle from '../styles/globalStyle';
import Info from '../components/Info';
import SEO from '../components/SEO';
import GitHub from '../components/GitHub';
import LinkedIn from '../components/LinkedIn';

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  text-align: center;
  background-color: hsla(0, 0%, 90%);
  border-radius: 2rem;
  margin-top: -5rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.2);
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
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
        keywords={['software', 'web', 'developer', 'portfolio']}
        description="Anders Nylund - Web Developer"
      />
      <Page>
        <Header />
        <Hero />
        <ContentWrapper>
          <Content>
            <Info />
            <Items>
              <GitHub />
              <LinkedIn />
            </Items>
          </Content>
        </ContentWrapper>
      </Page>
    </>
  </ThemeProvider>
);

export default IndexPage;
