import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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

  font-size: 1.5rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.3rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

function Header() {
  return (
    <Container>
      <Link href="/">
        <FlexBox>
          <ProfileImage />
          <H1>andersnylund</H1>
        </FlexBox>
      </Link>
      <FlexBox>
        <Link href="/about">
          <H3>/about</H3>
        </Link>
        <Link href="https://blog.andersnylund.com">
          <H3>/blog</H3>
        </Link>
      </FlexBox>
    </Container>
  );
}

export default Header;
