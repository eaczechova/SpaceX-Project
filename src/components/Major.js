import * as React from 'react';
import PropTypes from 'prop-types';
import launch from 'assets/launch.json';
import launchSite from 'assets/launch_site.json';
import rocket from 'assets/rocket.json';
import { format } from 'date-fns';

const currentTime = format(Date.now(), 'YYYY/MM/DD HH:MM');

class Major extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: Date.now(),
    };}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
  console.log(1);
    this.setState({
      currentDate: Date.now()
    });
  }

  render() {
    let currentDate = Date.now();
    let launchDate = launch.launch_date_unix;
    let seconds = Math.floor((launchDate - Math.floor(currentDate / 1000)));
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    return (
      <main className="launch">
        <article className="launch-info">
          <p className="date">{currentTime}</p>
          <h2>{rocket.name} launch</h2>
          <p className="counting-down">{days + ' DAYS ' + hours + ' HRS ' + minutes + ' MINS TO START'}</p>
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
