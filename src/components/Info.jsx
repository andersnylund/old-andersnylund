import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.black};
  font-size: 2rem;
  margin: 4rem;

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
    <p>
      I work with anything that solves the problem the best, however so far
      I&#39;ve found out that modern web technologies has been a great tool for
      most of the problems
    </p>
    <p className="secondary">
      Take a look at what I&#39;ve been doing lately
      <span role="img" aria-label="Hand pointing down">
        👇
      </span>
    </p>
  </Wrapper>
);

export default Info;
