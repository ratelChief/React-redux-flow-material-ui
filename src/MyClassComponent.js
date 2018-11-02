//@flow
import * as React from 'react';

type Props = {
  foo: string,
  bar: string
};

export default class MyClassComponent extends React.Component<Props> {

  static defaultProps = {
    foo: 'fooDefault'
  }

  render() {
    const myFooConst =
    <div>{this.props.foo}</div>;

    return (
      <div>
        {myFooConst}
        <p>{this.props.bar}</p>
      </div>
    );
  }
}