import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  box-shadow: 0px 10px 5px 10px ${props => props.theme.black};
`;

const TopDiv = styled.div`
  height: calc(${props => props.theme.footer} / 5);
  background: ${props => props.theme.black};
`;

const BottomDiv = styled.div`
  background: ${props => props.theme.brown};
  height: ${props => props.theme.footer};
`;

const Footer = () => (
  <StyledDiv>
    <TopDiv />
    <BottomDiv />
  </StyledDiv>
);

export default Footer;
