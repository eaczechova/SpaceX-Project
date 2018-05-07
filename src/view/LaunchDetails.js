import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Major from '../components/Major';
import Links from '../components/Links';
import FooterSection from '../components/FooterSection';

class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Major />
        <Links />
        <FooterSection />
      </div>
    );
  }
}

export default LaunchDetails;
