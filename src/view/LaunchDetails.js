import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Major from '../components/Major';
import Links from '../components/Links';
import FooterSection from '../components/FooterSection';

class LaunchDetails extends React.Component {

  static propTypes = {
    onBackClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Header onBackClick={this.props.onBackClick} />
        <Major />
        <Links />
        <FooterSection />
      </div>
    );
  }
}

export default LaunchDetails;
