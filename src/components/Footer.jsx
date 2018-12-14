import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => props.theme.brown};
  height: ${props => props.theme.footer};
`;

const Footer = () => <StyledDiv />;

export default Footer;
