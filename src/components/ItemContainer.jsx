import React from 'react';
import Grid from '@material-ui/core/Grid';
import { arrayOf, element } from 'prop-types';

function ItemContainer({ children }) {
  return (
    <Grid container justify="space-evenly" alignItems="center">
      {children.map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={index} item>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}

ItemContainer.propTypes = {
  children: arrayOf(element.isRequired).isRequired,
};

export default ItemContainer;
