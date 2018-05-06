import * as React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/space_x_logo_bw_centered.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-panel">
        <span className="return">GO BACK</span>
        <span className="logo">
          <img src={logo} alt="spacex logo" width="300"
            height="50"
          />
        </span>
      </nav>
    );
  }
}

export default Header;
