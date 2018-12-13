import React from 'react';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Pacifico from '../fonts/Pacifico';
import Background from '../components/Background';
import Header from '../components/Header';
import ItemContainer from '../components/ItemContainer';

import GlobalStyle from '../styles/globalStyle';

const IndexPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Background>
        <Pacifico>
          <Header text="andersnylund" href="/" />
        </Pacifico>
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
      </Background>
      <Footer />
    </div>
  );
};

export default IndexPage;
