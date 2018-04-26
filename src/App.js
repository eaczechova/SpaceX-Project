import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './components/LaunchDetails';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchDetails />
      </main>
    );
  }
}

export default hot(module)(App);
