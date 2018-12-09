import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import '../layouts/index.css';

export const StyledDiv = styled.div`
  text-align: center;
`;

const IndexPage = () => (
  <StyledDiv>
    <Typography variant="h1">Anders Nylund</Typography>
  </StyledDiv>
);

export default IndexPage;
