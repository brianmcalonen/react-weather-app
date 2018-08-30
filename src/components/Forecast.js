import React from 'react';

class Forecast extends React.Component {
  render() {

    const forecastStyle = {
      'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
      'transition': '0.3s',
      'borderRadius': '5px',
      'width': '90%',
      'height': '200px',
      'margin': '0 auto',
      'marginBottom': '20px',
      'padding': '20px'
    }

    return(
      <div style={forecastStyle}>
        <h3>Forecast Component</h3>
        <p>Date: {this.props.date}</p>
        <p>Temperature: {this.props.temp}</p>
        <p>Type: {this.props.type}</p>
      </div>
    )
  }
}

export default Forecast;
