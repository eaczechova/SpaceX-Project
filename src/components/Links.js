import * as React from 'react';
import PropTypes from 'prop-types';
import background from 'assets/rocket.png';
import launch from 'assets/launch.json';


class Links extends React.Component {
  render() {
    return (
      <section className="links">
        <img src={background} width="100%" height="400" />
        <div className="social-links">
          <h2>MISSION LINKS</h2>
          <button><a href={launch.links.reddit_campaign} target="_blank">REDDIT CAMPAIGN</a></button>
          <button><a href={launch.links.presskit} target="_blank">PRESSKIT</a></button>
          <button><a href={launch.links.video_link} target="_blank">MISSION VIDEO</a></button>
        </div>
      </section>
    );
  }
}

export default Links;
