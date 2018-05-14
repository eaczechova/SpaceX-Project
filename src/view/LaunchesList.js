import React from 'react';
import PropTypes from 'prop-types';
import launches from 'assets/launches.json';
import HeaderList from '../components/HeaderList';
import MajorList from '../components/MajorList';
import Falcon1List from '../components/Falcon1List';
import Falcon9List from '../components/Falcon9List';
import FalconHeavyList from '../components/FalconHeavyList';
import FooterSection from '../components/FooterSection';

class LaunchesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rocketName: 'All',
    };

    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleFalcon1Click = this.handleFalcon1Click.bind(this);
    this.handleFalcon9Click = this.handleFalcon9Click.bind(this);
    this.handleFalconHeavyClick = this.handleFalconHeavyClick.bind(this);
  }

  get selectedViewComponent() {
    const { rocketName } = this.state;
    switch (rocketName) {
      case 'All':
        return (
          <MajorList />
        );

      case 'Falcon 1':
        return (
          <Falcon1List />
        );

      case 'Falcon 9':
        return (
          <Falcon9List />
        );

      case 'Falcon Heavy':
        return (
          <FalconHeavyList />
        );

      default: return null;
    }
  }

  handleAllClick() {
    console.log('FalconAll');
    this.setState({ rocketName: 'All' });
  }

  handleFalcon1Click() {
    console.log('Falcon1');
    this.setState({ rocketName: 'Falcon 1' });
  }

  handleFalcon9Click() {
    console.log('Falcon9');
    this.setState({ rocketName: 'Falcon 9' });
  }

  handleFalconHeavyClick() {
    console.log('FalconHeavy');
    this.setState({ rocketName: 'Falcon Heavy' });
  }

  render() {
    return (
      <main className="launches-list">
        <HeaderList />
        <div className="button-section">
          <button onClick={this.handleAllClick}>All rockets</button>
          <button onClick={this.handleFalcon1Click}>Falcon 1</button>
          <button onClick={this.handleFalcon9Click}>Falcon 9</button>
          <button onClick={this.handleFalconHeavyClick}>Falcon heavy</button>
        </div>
        <div className="launch-list">
          {this.selectedViewComponent}
        </div>
        <FooterSection />
      </main>
    );
  }
}

export default LaunchesList;
