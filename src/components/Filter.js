import * as React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className="button-section">
        <button onClick={this.props.onFilterClick}>All rockets</button>
        <button onClick={this.props.onFilterClick}>Falcon 1</button>
        <button onClick={this.props.onFilterClick}>Falcon 9</button>
        <button onClick={this.props.onFilterClick}>Falcon 10</button>
        <button onClick={this.props.onFilterClick}>Falcon heavy</button>
      </div>
    )
  }
}
export default Filter;
