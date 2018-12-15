import React from 'react';
import { arrayOf, element } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
`;

function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

MainContainer.propTypes = {
  children: arrayOf(element.isRequired).isRequired,
};

export default MainContainer;
