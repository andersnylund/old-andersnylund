import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.black};
  font-size: 2rem;
  margin: 1rem;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 1.5rem;
  }

  .secondary {
    color: ${props => props.theme.grey};
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Info = () => (
  <Wrapper>
    <p>Fullstack web developer solving problems with modern technologies</p>
    <p className="secondary">
      <span role="img" aria-label="pointing down">
        👇
      </span>
      &nbsp;Take a look at what I&#39;ve been doing lately
    </p>
  </Wrapper>
);

export default Info;
