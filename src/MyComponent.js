// @flow
import * as React from 'react';

import { Paper } from '@material-ui/core';

type Props = {
  name: string | number,
  styles: any
};

const MyComponent = (props: Props) =>
  <Paper style={props.styles.Paper}>
    <div>
      <p>
        {props.name}
      </p>
    </div>
  </Paper>;
export default MyComponent;