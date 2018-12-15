import React from 'react';
import { ThemeProvider } from 'styled-components';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Pacifico from '../fonts/Pacifico';
import Header from '../components/Header';
import ItemContainer from '../components/ItemContainer';
import MainContainer from '../components/MainContainer';
import theme from '../styles/theme';
import Page from '../components/Page';

import GlobalStyle from '../styles/globalStyle';

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
