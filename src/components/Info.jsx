import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.brown};
  font-weight: bold;
  text-shadow: 1px 1px 1px ${props => props.theme.grey};
  font-size: 3rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.5rem;
  }
`;

const Info = () => (
  <Container>Take a look at what I&#39;ve been doing lately</Container>
);

export default Info;
