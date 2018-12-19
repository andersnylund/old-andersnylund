import React from 'react';
import { ThemeProvider } from 'styled-components';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Pacifico from '../fonts/Pacifico';
import Header from '../components/Header';
import ItemContainer from '../components/ItemContainer';
import Content from '../components/Content';
import theme from '../styles/theme';
import Page from '../components/Page';

import GlobalStyle from '../styles/globalStyle';
import Info from '../components/Info';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Page>
        <Pacifico>
          <Header />
        </Pacifico>
        <Content>
          <Info />
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
        </Content>
      </Page>
      <Footer />
    </div>
  </ThemeProvider>
);

export default IndexPage;
