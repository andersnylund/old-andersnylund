import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Link from '../styles/Link';

const StyledH1 = styled.h1`
  margin: 0 2rem 1rem;
  user-select: none;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1rem;
  }
`;

function Header({ text, href }) {
  return (
    <StyledLink href={href}>
      <StyledH1>{text}</StyledH1>
    </StyledLink>
  );
}

Header.propTypes = {
  text: string.isRequired,
  href: string,
};

Header.defaultProps = {
  href: '',
};

export default Header;
