import React from 'react';
import { arrayOf, element } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function ItemContainer({ children }) {
  return <Container>{children}</Container>;
}

ItemContainer.propTypes = {
  children: arrayOf(element.isRequired).isRequired,
};

export default ItemContainer;
