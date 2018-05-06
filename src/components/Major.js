import * as React from 'react';
import PropTypes from 'prop-types';
import launch from 'assets/launch.json';
import launchSite from 'assets/launch_site.json';
import rocket from 'assets/rocket.json';

class Major extends React.Component {
  render() {
    return (
      <main className="launch">
        <article className="launch-info">
          <p className="date">{(new Date().toLocaleDateString())}</p>
          <h2>{rocket.name} launch</h2>
          <h4 className="counting-down">TO START</h4>
          <p>
            <img src={launch.links.mission_patch} width="180" height="180" />
          </p>
        </article>
        <article className="launch-details">
          <h3>DETAILS</h3>
          <hr />
          <p className="launch-details-text">
            {launch.details}
          </p>
          <h3>ROCKET</h3>
          <hr />
          <div className="rocket-data">
            <ul>
              <li><span className="label">NAME: </span> {rocket.name}</li>
              <li><span className="label">COMPANY: </span>{rocket.company}</li>
              <li><span className="label">HEIGHT: </span>{rocket.height.meters}M / {rocket.height.feet}FT</li>
              <li><span className="label">DIMATER: </span>{rocket.diameter.meters}M / {rocket.diameter.feet}FT</li>
              <li><span className="label">MASS: </span>{rocket.mass.kg}KG / {rocket.mass.lb}LB</li>
            </ul>
            <ul>
              <li><span className="label">FIRST FLIGHT: </span> {rocket.first_flight}</li>
              <li><span className="label">COUNTRY: </span>{rocket.country}</li>
              <li><span className="label">SUCCESS RATE: </span>{rocket.success_rate_pct}%</li>
              <li><span className="label">COST PER LAUNCH: </span>${rocket.cost_per_launch}</li>
            </ul>
          </div>
          <p>{rocket.description}</p>
          <h3>LAUNCH PAD</h3>
          <hr />
          <div className="launchpad-data">
            <ul>
              <li><span className="label">NAME: </span> {launchSite.full_name}</li>
            </ul>
            <ul>
              <li><span className="label">LOCATION: </span> {launchSite.location.name}, {launchSite.location.region}</li>
            </ul>
          </div>
          <p>{launchSite.details}</p>
        </article>
      </main>
    );
  }
}

export default Major;
