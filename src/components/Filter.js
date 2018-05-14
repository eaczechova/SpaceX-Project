// import * as React from 'react';
// import PropTypes from 'prop-types';
// import launches from 'assets/launches.json';
// import { format } from 'date-fns';
//
// class Filter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rocketName: 'All',
//     };
//
//   this.handleAllClick = this.handleAllClick.bind(this);
//   this.handleFalcon1Click = this.handleFalcon1Click.bind(this);
//   this.handleFalcon9Click = this.handleFalcon9Click.bind(this);
//   this.handleFalconHeavyClick = this.handleFalconHeavyClick.bind(this);
// }
//
//   handleAllClick() {
//     console.log('FalconAll');
//     this.setState({ rocketName: 'All' });
//   }
//
//   handleFalcon1Click() {
//     console.log('Falcon1');
//     // this.setState({ rocketName: 'Falcon 1' });
//   }
//
//   handleFalcon9Click() {
//     console.log('Falcon9');
//     // this.setState({ rocketName: 'Falcon 9' });
//   }
//
//   handleFalconHeavyClick() {
//     console.log('FalconHeavy');
//     // this.setState({ rocketName: 'Falcon Heavy' });
//   }
//
//   render() {
//     return (
//       <div className="button-section">
//         <button onClick={this.handleAllClick}>All rockets</button>
//         <button onClick={this.handleFalcon1Click}>Falcon 1</button>
//         <button onClick={this.handleFalcon9Click}>Falcon 9</button>
//         <button onClick={this.handleFalconHeavyClick}>Falcon heavy</button>
//       </div>
//     )
//   }
// }
// export default Filter;
