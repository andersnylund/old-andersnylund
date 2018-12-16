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
import Roboto from '../fonts/Roboto';
import Divider from '../components/Divider';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Page>
        <Pacifico>
          <Header />
        </Pacifico>
        <Content>
          <div>
            <Roboto fontSize="3rem" letterSpacing="0.3rem">
              Software developer
            </Roboto>
            <Divider />
            <Roboto fontSize="2rem" letterSpacing="0.1rem">
              Take a look at what I&#39;ve been doing lately
            </Roboto>
          </div>
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
