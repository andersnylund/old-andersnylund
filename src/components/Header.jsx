import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2rem 2rem;
  font-family: 'Pacifico';
  text-shadow: 2px 2px 3px ${props => props.theme.grey};
  background-color: ${props => props.theme.blue};
  border-bottom: 2px solid ${props => props.theme.grey};
`;

const H1 = styled.h1`
  margin: 1rem 1rem 0;
`;

const H3 = styled.h3`
  margin: 1rem 1rem 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.pink};

  font-size: 2rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1rem;
  }
`;

function Header() {
  return (
    <Container>
      <Link href="https://www.andersnylund.com">
        <H1>andersnylund</H1>
      </Link>
      <Link href="https://blog.andersnylund.com">
        <H3>blog -&gt;</H3>
      </Link>
    </Container>
  );
}

export default Header;
