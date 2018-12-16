import React from 'react';
import styled from 'styled-components';
import Roboto from '../fonts/Roboto';

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
`;

const SubHeader = () => (
  <StyledDiv>
    <Roboto>
      <StyledH2>Software developer</StyledH2>
    </Roboto>
  </StyledDiv>
);

export default SubHeader;
