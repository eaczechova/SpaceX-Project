// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import launch from 'assets/launch.json';
//
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentDate: Date.now(),
//     };}
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//   console.log(1);
//     this.setState({
//       currentDate: Date.now()
//     });
//   }
//
//   render() {
//     let currentDate = Date.now();
//     let launchDate = launch.launch_date_unix;
//     let seconds = Math.floor((launchDate - Math.floor(currentDate / 1000)));
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
//     let days = Math.floor(hours / 24);
//     hours = hours - (days * 24);
//     minutes = minutes - (days * 24 * 60) - (hours * 60);
//     return (
//       <div>
//         { days + ' DAYS ' + hours + ' HRS ' + minutes + ' MINS TO START'}
//       </div>
//     );
//   }
// }
//
// export default Counter;
