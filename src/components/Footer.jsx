import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-shadow: 0px 10px 5px 10px ${props => props.theme.black};
`;

const Top = styled.div`
  height: calc(${props => props.theme.footer} / 5);
  background: ${props => props.theme.black};
`;

const Bottom = styled.div`
  background: ${props => props.theme.brown};
  height: ${props => props.theme.footer};
`;

const Footer = () => (
  <StyledFooter>
    <Top />
    <Bottom />
  </StyledFooter>
);

export default Footer;
