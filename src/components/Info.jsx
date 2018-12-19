import React from 'react';
import styled from 'styled-components';

import Roboto from '../fonts/Roboto';
import Divider from './Divider';

const MainText = styled.div`
  font-size: 3rem;
  letter-spacing: 1rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.5rem;
  }
`;

const SecondaryText = styled.div`
  font-size: 2rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1rem;
  }
`;

const Info = () => (
  <div>
    <MainText>
      <Roboto>Software developer</Roboto>
    </MainText>
    <Divider />
    <SecondaryText>
      <Roboto>Take a look at what I&#39;ve been doing lately</Roboto>
    </SecondaryText>
  </div>
);

export default Info;
