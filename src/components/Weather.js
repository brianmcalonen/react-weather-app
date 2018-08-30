import React from 'react';

class Weather extends React.Component {
  render() {
    const weatherStyle = {
      'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
      'transition': '0.3s',
      'borderRadius': '5px',
      'width': '90%',
      'height': '250px',
      'margin': '0 auto',
      'marginBottom': '20px',
      'padding': '20px'
    }

    return(
      <div style={weatherStyle}>
        <h3>Weather Component</h3>
        <p>Latitude: {this.props.latitude}</p>
        <p>Longitude: {this.props.longitude}</p>
        <p>City: {this.props.city}</p>
        <p>Temperature: {this.props.temperature}</p>

        <button onClick={this.props.getLocation}>Current Location</button>
        <button onClick={this.props.getWeather}>Get Weather</button>
      </div>
    )
  }
}

export default Weather;
