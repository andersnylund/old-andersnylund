import React from 'react';
import Typography from '@material-ui/core/Typography';

import { StyledDiv } from './index';

const NotFoundPage = () => (
  <StyledDiv>
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </StyledDiv>
);

export default NotFoundPage;
