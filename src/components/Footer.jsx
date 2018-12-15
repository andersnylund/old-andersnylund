import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => props.theme.brown};
  height: ${props => props.theme.footer};
  box-shadow: 0px 8px 3px 10px ${props => props.theme.grey};
`;

const Footer = () => <StyledDiv />;

export default Footer;
