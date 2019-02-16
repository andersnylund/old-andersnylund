import React from 'react';
import styled from 'styled-components';
import { element, string } from 'prop-types';

const Wrapper = styled.div`
  margin: 2rem;
  path {
    transition: 0.5s;
  }
  :hover {
    cursor: pointer;
    path {
      fill: ${props => props.theme.black};
    }
  }
`;

const SvgWrapper = ({ children, link }) => (
  <a href={link}>
    <Wrapper>{children}</Wrapper>
  </a>
);

SvgWrapper.propTypes = {
  children: element.isRequired,
  link: string.isRequired,
};

export default SvgWrapper;
