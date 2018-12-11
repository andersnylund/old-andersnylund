import React from 'react';
import styled from 'styled-components';

import github from '../images/github.svg';

const Container = styled.div`
  color: #fcbfb7;
`;

const TopContainer = styled.div`
  background: #8aa1b1;
  left: 0;
  top: 0;
  width: 100%;
  height: 50%;
  position: fixed;
`;

const BottomContainer = styled.div`
  background: #33261d;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  position: fixed;
`;

const FontContainer = styled.div`
  margin: 2rem;
`;

const IndexPage = () => (
  <Container>
    <TopContainer>
      <FontContainer>
        <h1>Anders Nylund</h1>
      </FontContainer>
      <img src={github} alt="GitHub logo" />
    </TopContainer>
    <BottomContainer />
  </Container>
);

export default IndexPage;
