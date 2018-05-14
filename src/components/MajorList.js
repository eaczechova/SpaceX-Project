import * as React from 'react';
import PropTypes from 'prop-types';
import launches from 'assets/launches.json';
import { format } from 'date-fns';

class MajorList extends React.Component {
  render() {
    return (
      <div className="launch-list">
      <ul>
          {launches.map( info => (
            <li>
              <h4 key={info.launch_date_unix}>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
              <span>Rocket: <strong key={info.flight_number}>{info.rocket.rocket_name} </strong></span> |
              <span>Launch site: <strong key={info.mission_name}>{(info.launch_site.site_name_long).substring(0, 32)+'...'} </strong></span>
            </li>
          ))}
      </ul>
      </div>
    )
  }
}
export default MajorList;
