import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Link from '../styles/Link';

const Img = styled.img`
  margin: 2rem;
  height: 16rem;

  @media (max-width: ${props => props.theme.mobile}) {
    height: 10rem;
  }
`;

const Image = ({ src, alt, href }) => (
  <Link href={href}>
    <Img src={src} alt={alt} />
  </Link>
);

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  href: string.isRequired,
};

export default Image;
