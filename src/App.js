import { hot } from 'react-hot-loader';
import * as React from 'react';
import Header from './components/Header';
import Major from './components/Major';
import Links from './components/Links';
import FooterSection from './components/FooterSection';
import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header />
        <Major />
        <Links />
        <FooterSection />
      </main>
    );
  }
}

export default hot(module)(App);
