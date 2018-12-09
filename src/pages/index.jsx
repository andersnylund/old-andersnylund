import React from 'react';
import { Link } from 'gatsby';

import Typography from '@material-ui/core/Typography';

const IndexPage = () => (
  <div>
    <Typography variant="h1">Hi people</Typography>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
