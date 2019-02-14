import React from 'react';
import { arrayOf, element } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  text-align: center;
`;

function Content({ children }) {
  return <Container>{children}</Container>;
}

Content.propTypes = {
  children: arrayOf(element.isRequired).isRequired,
};

export default Content;