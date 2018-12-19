import React from 'react';
import styled from 'styled-components';

import Link from '../styles/Link';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 2rem 2rem;
`;

const StyledH1 = styled.h1`
  user-select: none;
  margin: 1rem 1rem 0;
`;

const StyledH3 = styled.h3`
  user-select: none;
  margin: 1rem 1rem 0;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1rem;
  }
`;

function Header() {
  return (
    <Container>
      <StyledLink href="https://www.andersnylund.com">
        <StyledH1>andersnylund</StyledH1>
      </StyledLink>
      <StyledLink href="https://blog.andersnylund.com">
        <StyledH3>blog -&gt;</StyledH3>
      </StyledLink>
    </Container>
  );
}

export default Header;
