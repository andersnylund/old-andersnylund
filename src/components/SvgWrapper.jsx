import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { element, string } from 'prop-types';

const Posed = posed.div({
  hoverable: true,
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
});

const Wrapper = styled(Posed)`
  margin: 2rem;
  path {
    transition: 0.3s;
  }
  :hover {
    cursor: pointer;
    path {
      fill: ${props => props.theme.grey};
    }
  }

  @media (max-width: ${props => props.theme.mobile}) {
    transform: scale(0.7);
  }
`;

const SvgWrapper = ({ children, link }) => (
  <a href={link}>
    <Wrapper pose="normal">{children}</Wrapper>
  </a>
);

SvgWrapper.propTypes = {
  children: element.isRequired,
  link: string.isRequired,
};

export default SvgWrapper;
