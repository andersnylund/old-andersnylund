import React from 'react';
import styled from 'styled-components';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Image from '../components/Image';
import Footer from '../components/Footer';

const Container = styled.div`
  color: #fcbfb7;
`;

const Top = styled.div`
  background: #8aa1b1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Font = styled.div`
  margin: 2rem;
`;

const IndexPage = () => (
  <Container>
    <Top>
      <Font>
        <h1>Anders Nylund</h1>
      </Font>
      <Image src={github} alt="GitHub logo" />
      <Image src={linkedin} alt="LinkedIn logo" />
    </Top>
    <Footer />
  </Container>
);

export default IndexPage;
