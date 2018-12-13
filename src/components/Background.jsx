import React from 'react';
import { element, arrayOf } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #8aa1b1;
  padding: 2rem;
  width: auto;
  height: auto;
`;

function Background({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Background.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Background;
