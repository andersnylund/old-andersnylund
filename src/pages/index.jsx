import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Pacifico from '../fonts/Pacifico';
import Header from '../components/Header';
import ItemContainer from '../components/ItemContainer';
import MainContainer from '../components/MainContainer';
import theme from '../styles/theme';

import GlobalStyle from '../styles/globalStyle';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Page>
        <Pacifico>
          <Header text="andersnylund" href="/" />
        </Pacifico>
        <MainContainer>
          <ItemContainer>
            <Image
              src={github}
              alt="GitHub logo"
              href="https://www.github.com/andersnylund"
            />
            <Image
              src={linkedin}
              alt="LinkedIn logo"
              href="https://www.linkedin.com/in/andersnylund/"
            />
          </ItemContainer>
        </MainContainer>
        <Footer />
      </Page>
    </div>
  </ThemeProvider>
);

export default IndexPage;
