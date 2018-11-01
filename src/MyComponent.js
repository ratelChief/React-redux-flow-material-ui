// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  name: string | number,
};

const MyComponent = (props: Props) =>
  <div>
    <p>
      {props.name}
    </p>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>;

export default MyComponent;