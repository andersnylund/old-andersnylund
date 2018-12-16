import React from 'react';
import styled from 'styled-components';
import { element } from 'prop-types';
import 'typeface-roboto';

const Wrapper = styled.div`
  font-family: 'Roboto';
  font-size: 1.5rem;
`;

const Roboto = ({ children }) => <Wrapper>{children}</Wrapper>;

Roboto.propTypes = {
  children: element.isRequired,
};

export default Roboto;
