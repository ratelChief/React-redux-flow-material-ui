// @flow
import * as React from 'react';

import { Header, Footer, Main } from './styles';

type Props = {
  foo?: string,
  bar?: string,
};

export default class App extends React.Component<Props> {
  render() {
    return (
      <>
        <Header />

        <Main
          foo={'props'}
          bar={'bar'}
          name={ 'alice' }
        />

        <Footer />
      </>
    );
  }
}