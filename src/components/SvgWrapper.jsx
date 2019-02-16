import React from 'react';
import styled from 'styled-components';
import { element } from 'prop-types';

const Wrapper = styled.div`
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

const SvgWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

SvgWrapper.propTypes = {
  children: element.isRequired,
};

export default SvgWrapper;
