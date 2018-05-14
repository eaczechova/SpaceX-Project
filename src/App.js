import { hot } from 'react-hot-loader';
import * as React from 'react';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';

import launches from './assets/launches.json';
import LaunchesList from './view/LaunchesList';
import './styles/theme.sass';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'details',
    };
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }
  render() {
    return (
      <main>
        {this.activeViewComponent}
      </main>
    );
  }
}

export default hot(module)(App);
