import React from 'react';
import { format } from 'date-fns';
import { RingLoader } from 'react-spinners';
import HeaderList from '../components/HeaderList';
import Filter from '../components/Filter';
import FooterSection from '../components/FooterSection';

class LaunchesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rocketName: 'All',
      launches: [],
      error: null,
      loading: true,
      url: '',
    };
  }

  componentDidMount() {
    if (this.state.rocketName === 'All') {
      fetch('https://api.spacexdata.com/v2/launches')
        .then(response => response.json())
        .then((responseData) => {
          this.setState({ launches: responseData, loading: false });
        })
        .catch(error => this.setState({ error, loading: false }));
    }
    else if (this.state.rocketName !== 'All') {
      fetch(this.state.url)
        .then(response => response.json())
        .then((responseData) => {
          this.setState({ launches: responseData, loading: false });
        })
        .catch(error => this.setState({ error, loading: false }));
    }
  }

  filterList = (e) => {
    if (e.target.innerHTML.toUpperCase() === 'ALL ROCKETS') {
      this.setState({ rocketName: 'All' });
    } else if (e.target.innerHTML.toUpperCase() === 'FALCON 1') {
      this.setState({ rocketName: 'Falcon 1' });
    } else if (e.target.innerHTML.toUpperCase() === 'FALCON 9') {
      this.setState({ rocketName: 'Falcon 9' });
    } else if (e.target.innerHTML.toUpperCase() === 'FALCON 10') {
      this.setState({ rocketName: 'Falcon 10' });
    } else if (e.target.innerHTML.toUpperCase() === 'FALCON HEAVY') {
      this.setState({ rocketName: 'Falcon Heavy' });
    }
  }

    changeURL = () => {
      this.setState({ url: `https://api.spacexdata.com/v2/launches?rocket_id=${this.state.rocketName.toLocaleLowerCase().replace(' ', '')}` });
    }

    double = (e) => {
      this.filterList(e);
      this.changeURL();
    }

    render() {
      console.log('rocketname', this.state.rocketName);
      console.log('url', this.state.url);
      return (
      <main className="launches-list">
        <HeaderList />
        <Filter
          onFilterClick={this.double}
        />
        <RingLoader
          color={'#ffffff'}
          loading={this.state.loading}
        />
        <div className="launch-list">
          {this.state.rocketName === 'All' && (
            <ul>
              {this.state.launches.map(info => (
                <li>
                  <h4 key={info.launch_date_unix}>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
                  <span>Rocket: <strong key={info.flight_number}>{info.rocket.rocket_name} </strong></span> |
                  <span>Launch site: <strong key={info.mission_name}>{(info.launch_site.site_name_long).substring(0, 32)} </strong><button className="more-info" onClick={this.props.onLaunchClick}>...</button></span>
                </li>
                ))}
            </ul>
          )}
          {this.state.rocketName === 'Falcon 1' && (
            <ul>
              {this.state.launches.filter(info => info.rocket.rocket_name === 'Falcon 1').map(info => (
                <li>
                  <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
                  <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
                  <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)} </strong><button className="more-info" onClick={this.props.onLaunchClick}>...</button></span>
                </li>
              ))}
            </ul>
          )}
          {this.state.rocketName === 'Falcon 9' && (
            <ul>
              {this.state.launches.filter(info => info.rocket.rocket_name === 'Falcon 9').map(info => (
                <li>
                  <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
                  <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
                  <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)} </strong><button className="more-info" onClick={this.props.onLaunchClick}>...</button></span>
                </li>
              ))}
            </ul>
          )}
          {this.state.rocketName === 'Falcon 10' && (
            <ul>
              {this.state.launches.filter(info => info.rocket.rocket_name === 'Falcon 10' && this.state.launches.length > 0).map(info => (
                <li>
                  <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
                  <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
                  <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)} </strong><button className="more-info" onClick={this.props.onLaunchClick}>...</button></span>
                </li>
              ))}
            </ul>
          )}
          {this.state.rocketName === 'Falcon Heavy' && (
            <ul>
              {this.state.launches.filter(info => info.rocket.rocket_name === 'Falcon Heavy' && this.state.launches.length > 0).map(info => (
                <li>
                  <h4>{format(info.launch_date_utc, 'DD MMMM YYYY')}</h4>
                  <span>Rocket: <strong>{info.rocket.rocket_name} </strong></span> |
                  <span>Launch site: <strong>{(info.launch_site.site_name_long).substring(0, 32)}</strong><button className="more-info" onClick={this.props.onLaunchClick}>...</button></span>
                </li>
              ))}
            </ul>
          )}
          {this.state.error !== null && (
            <p className="failed-info">We are sorry, but the connection with SpaceX has failed, please try again.</p>
          )}
        </div>
        <FooterSection />
      </main>
      );
    }
}

export default LaunchesList;
