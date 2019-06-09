import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.black};
  text-shadow: 1px 1px 1px ${props => props.theme.grey};
  font-size: 2rem;
  margin: 4rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.5rem;
  }
`;

const Info = () => (
  <Wrapper>
    Hello! I&#39;m a software developer loving all things with web. Take a look
    at what I&#39;ve been doing lately or visit my blog
  </Wrapper>
);

export default Info;
