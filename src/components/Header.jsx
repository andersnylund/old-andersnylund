import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Link from './styles/Link';

const StyledHeader = styled.h1`
  margin: 0;
  user-select: none;
`;

function Header({ text, href }) {
  return (
    <Link href={href}>
      <StyledHeader>{text}</StyledHeader>
    </Link>
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
