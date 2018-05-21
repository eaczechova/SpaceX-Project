import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      screen: 'details',
    };
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleLaunchClick() {
    this.setState({ screen: 'details' });
  }

  handleBackClick() {
    this.setState({ screen: 'list' });
  }

  render() {
    return (
      <main>
        {this.state.screen === 'list' && (
          <LaunchesList
            onLaunchClick={this.handleLaunchClick}
          />
        )}

        {this.state.screen === 'details' && (
          <LaunchDetails
            onBackClick={this.handleBackClick}
          />
        )}
      </main>
    );
  }
}

export default hot(module)(App);
