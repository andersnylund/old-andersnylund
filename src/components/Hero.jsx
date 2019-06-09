import React from 'react';
import styled from 'styled-components';

import image from '../images/mac.jpg';

const Section = styled.section`
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 40rem;
  margin: 0 1rem;
  text-transform: uppercase;
`;

const Darkened = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const H2 = styled.h2`
  font-size: 4rem;
  letter-spacing: 0.1rem;
  text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4);
  color: hsl(0, 0%, 90%);

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 2rem;
  }
`;

const Hero = () => (
  <Section>
    <Darkened>
      <H2>Developer Loving All Things with the web</H2>
    </Darkened>
  </Section>
);

export default Hero;
