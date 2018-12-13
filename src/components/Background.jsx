import React from 'react';
import { element, arrayOf } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #8aa1b1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0 2rem;
`;

function Background({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Background.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Background;
