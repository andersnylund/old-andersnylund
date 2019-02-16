import React from 'react';
import styled from 'styled-components';

import image from '../images/mac.jpg';

const Div = styled.div`
  background-size: cover;
  background: url(${image}) no-repeat center center;
  height: 40rem;
`;

const Hero = () => <Div />;

export default Hero;
