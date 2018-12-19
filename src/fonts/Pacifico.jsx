import React from 'react';
import styled from 'styled-components';
import { element } from 'prop-types';
import 'typeface-pacifico';

const Wrapper = styled.div`
  font-family: 'Pacifico';
  color: ${props => props.theme.pink};
  text-shadow: 2px 2px 3px ${props => props.theme.grey};
`;

const Pacifico = ({ children }) => <Wrapper>{children}</Wrapper>;

Pacifico.propTypes = {
  children: element.isRequired,
};

export default Pacifico;
