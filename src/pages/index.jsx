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
import SubHeader from '../components/SubHeader';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Page>
        <Pacifico>
          <Header text="andersnylund" href="/" />
        </Pacifico>
        <Content>
          <SubHeader />
          <Roboto>
            <p>Software developer</p>
            <p>
              Creating stuff for the web. Solving technical and non-technical
              problems
            </p>
            <p>Take a look at what I&#39;ve been doing lately</p>
          </Roboto>
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
        <Footer />
      </Page>
    </div>
  </ThemeProvider>
);

export default IndexPage;
