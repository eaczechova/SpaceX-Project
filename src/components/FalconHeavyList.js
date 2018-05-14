import * as React from 'react';
import PropTypes from 'prop-types';
import launches from 'assets/launches.json';
import { format } from 'date-fns';

class FalconHeavyList extends React.Component {
  handleFalconHeavyClick() {
    console.log('FalconHeavy');
    this.setState({ rocketName: 'Falcon Heavy' });
  }

  render() {
    return (
      <div className="launch-list">
        <ul>
          {launches.filter(info => info.rocket.rocket_name == 'Falcon Heavy').map(info => (
            <li>
              <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
              <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
              <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)+'...'} </strong></span>
            </li>
         ))}
        </ul>
      </div>
    );
  }
}
export default FalconHeavyList;
