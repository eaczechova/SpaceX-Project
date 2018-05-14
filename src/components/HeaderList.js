import * as React from 'react';
import moon from 'assets/moon.png';
import logo from 'assets/space_x_logo_bw_centered.png';

class HeaderList extends React.Component {
  render() {
    return (
      <header className="header-list">
          <img src={moon} alt="moon image" width="700"
          height="350"
          />
          <img src={logo} alt="spacex logo" width="400"
            height="50"
          />
          <h2>Launches 2018</h2>
      </header>
    );
  }
}

export default HeaderList;
