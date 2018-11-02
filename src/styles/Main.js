import * as React from 'react';
import MyComponent from '../MyComponent';
import MyClassComponent from '../MyClassComponent';

import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 40,
    marginLeft: 30
  }
};

export default props =>
  <Grid container >

    <Grid item sm>
      <MyClassComponent
        foo={props.foo}
        bar={props.bar}
        styles={styles}
      />
    </Grid>


    <Grid item sm>
      <MyComponent
        name={props.name}
        styles={styles}
      />
    </Grid>

  </Grid>;