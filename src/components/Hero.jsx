import React from 'react';
import styled from 'styled-components';

import image from '../images/mac.jpg';

const Section = styled.section`
  background-size: cover;
  background: url(${image}) no-repeat center center;
  height: 40rem;
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
`;

const H2 = styled.h2`
  font-size: 4rem;
  letter-spacing: 0.1rem;
  margin: 0;
  text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4);
  color: hsl(0, 0%, 90%);
`;

const H3 = styled.h2`
  color: white;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4);
  color: hsl(0, 0%, 90%);
`;

const Hero = () => (
  <Section>
    <Darkened>
      <H2>Web Developer</H2>
      <H3>Loving all things with web</H3>
    </Darkened>
  </Section>
);

export default Hero;
