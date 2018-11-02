// @flow
import * as React from 'react';
import MyComponent from './MyComponent';
import MyClassComponent from './MyClassComponent';

type Props = {
  foo?: string,
  bar?: string,
};

export default class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header"> <p> material-ui</p> </header>
        <MyClassComponent
          foo={'props'}
          bar={'bar'}
        />
        <MyComponent name={ 'alice' } />
      </div>
    );
  }
}