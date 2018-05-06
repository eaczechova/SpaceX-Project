import * as React from 'react';

class FooterSection extends React.Component {
  render() {
    return (
      <footer>
        <span>FOLLOW SPACEX |</span>
        <span><a href="https://twitter.com/spacex" target="_blank" rel="noopener noreferrer">TWITTER</a></span>
        <span><a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target="_blank" rel="noopener noreferrer">YOUTUBE</a></span>
        <span><a href="https://www.flickr.com/photos/spacex/" target="_blank" rel="noopener noreferrer">FLICKR</a></span>
        <span><a href="https://www.instagram.com/spacex/?hl=pl" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></span>
      </footer>
    );
  }
}

export default FooterSection;
