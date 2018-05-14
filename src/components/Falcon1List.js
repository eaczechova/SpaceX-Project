import * as React from 'react';
import PropTypes from 'prop-types';
import launches from 'assets/launches.json';
import { format } from 'date-fns';

class Falcon1List extends React.Component {
  render() {
    return (
      <div className="launch-list">
        <ul>
          {launches.filter(info => info.rocket.rocket_name == 'Falcon 1').map( info => (
            <li>
              <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
              <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
              <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)+'...'} </strong></span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Falcon1List;
