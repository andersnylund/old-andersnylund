import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 2rem;
  font-family: 'Pacifico';
  text-shadow: 2px 2px 3px ${props => props.theme.grey};
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
    font-size: 1.5rem;
  }
`;

const FirstChild = styled.div`
  display: flex;
`;

function Header() {
  return (
    <Container>
      <FirstChild>
        <ProfileImage />
        <Link href="https://www.andersnylund.com">
          <H1>andersnylund</H1>
        </Link>
      </FirstChild>
      <Link href="https://blog.andersnylund.com">
        <H3>blog -&gt;</H3>
      </Link>
    </Container>
  );
}

export default Header;
