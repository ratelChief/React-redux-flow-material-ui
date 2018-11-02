import * as React from 'react';
import MyComponent from '../MyComponent';
import MyClassComponent from '../MyClassComponent';

export default props =>
  <>
    <MyClassComponent
      foo={props.foo}
      bar={props.bar}
    />
    <MyComponent
      name={props.name}
    />
  </>;