import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  margin: 2rem;
  height: 16rem;

  @media (max-width: ${props => props.theme.mobile}) {
    height: 10rem;
  }
`;

const Image = ({ src, alt, href }) => (
  <a href={href}>
    <Img src={src} alt={alt} />
  </a>
);

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  href: string.isRequired,
};

export default Image;
