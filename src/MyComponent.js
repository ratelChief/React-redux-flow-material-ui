// @flow
import * as React from 'react';

type Props = {
  name: string,
};

const MyComponent = (props: Props) =>
  <div><p>
    {props.name}
  </p></div>;

export default MyComponent;