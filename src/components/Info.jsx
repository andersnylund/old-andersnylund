import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.brown};
  font-weight: bold;
  text-shadow: 1px 1px 1px ${props => props.theme.grey};
`;

const MainText = styled.div`
  font-size: 3rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.5rem;
  }
`;

const Divider = styled.div`
  background: ${props => props.theme.brown};
  height: 0.2rem;
  box-shadow: 1px 1px 1px ${props => props.theme.grey};
`;

const SecondaryText = styled.div`
  font-size: 2rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1rem;
  }
`;

const Info = () => (
  <Container>
    <MainText>Software developer</MainText>
    <Divider />
    <SecondaryText>
      Take a look at what I&#39;ve been doing lately
    </SecondaryText>
  </Container>
);

export default Info;
