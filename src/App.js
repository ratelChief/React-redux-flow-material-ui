// @flow
import * as React from 'react';
import MyComponent from './MyComponent';

type Props = {
  foo: number,
  bar?: string,
};

export default class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        {this.props.bar}
        <header className="App-header"> <p> material-ui</p> </header>
        <MyComponent name={ 'alice' } />
      </div>
    );
  }
}