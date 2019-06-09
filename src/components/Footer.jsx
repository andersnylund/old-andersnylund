import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  /* box-shadow: 0px 10px 5px 10px ${props => props.theme.black}; */
`;

const Bottom = styled.div`
  /* background: ${props => props.theme.brown}; */
  /* height: ${props => props.theme.footer}; */
`;

const Footer = () => (
  <StyledFooter>
    <Bottom />
  </StyledFooter>
);

export default Footer;
