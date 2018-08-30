import React from 'react';

class Weather extends React.Component {
  render() {


    const weatherStyle = {
      'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
      'transition': '0.3s',
      'borderRadius': '5px',
      'width': '90%',
      'height': '350px',
      'margin': '0 auto',
      'marginBottom': '20px',
      'padding': '20px'
    }

    return(
      <div style={weatherStyle}>
        <h3>Weather Component</h3>
        <p>Date: {this.props.date}</p>
        <p>Latitude: {this.props.latitude}</p>
        <p>Longitude: {this.props.longitude}</p>
        <p>Location: {this.props.city}</p>
        <p>Temperature: {this.props.temp}°F</p>
        <p>Type: {this.props.type}</p>
        <p>Humidity: {this.props.humidity}%</p>
        <p>Wind: {this.props.wind}mph</p>

        <button onClick={this.props.getLocation}>Current Location</button>
        <button onClick={this.props.getWeather}>Get Weather</button>
      </div>
    )
  }
}

export default Weather;
