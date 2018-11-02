//@flow
import * as React from 'react';
import { Paper } from '@material-ui/core';

type Props = {
  foo: string,
  bar: string,
  styles: any
};

export default class MyClassComponent extends React.Component<Props> {

  static defaultProps = {
    foo: 'fooDefault'
  }

  render() {
    const myFooConst =
    <div>{this.props.foo}</div>;

    return (
      <Paper style={this.props.styles.Paper}>
        <div>
          {myFooConst}
          <p>{this.props.bar}</p>
        </div>
      </Paper>
    );
  }
}