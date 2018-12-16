import React from 'react';
import styled from 'styled-components';
import { element, string } from 'prop-types';
import 'typeface-roboto';

const Wrapper = styled.div`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.brown};
  font-weight: bold;
  text-shadow: 1px 1px 1px ${props => props.theme.grey};
  letter-spacing: ${props => props.letterSpacing};
`;

const Roboto = ({ children, fontSize, letterSpacing }) => (
  <Wrapper fontSize={fontSize} letterSpacing={letterSpacing}>
    {children}
  </Wrapper>
);

Roboto.propTypes = {
  children: element.isRequired,
  fontSize: string.isRequired,
  letterSpacing: string.isRequired,
};

export default Roboto;
