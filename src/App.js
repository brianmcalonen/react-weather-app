import React, { Component } from 'react';

import Titles from './components/Titles';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

const apiKey = "02ee64e1f88918399ceccdea9f8b543b";

class App extends Component {
  state = {
    latitude: undefined,
    longitude: undefined,
    city: undefined,
    temperature: undefined,
    date1: undefined,
    date2: undefined,
    date3: undefined,
    date4: undefined,
    date5: undefined,
    temp1: undefined,
    temp2: undefined,
    temp3: undefined,
    temp4: undefined,
    temp5: undefined
  }

  getLocation = async (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          console.log("Latitude: " + position.coords.latitude);
          console.log("Longitude: " + position.coords.longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${apiKey}&units=imperial`);
    const data = await apiCall.json();
    console.log(data);
    this.setState({
      latitude: data.city.coord.lat,
      longitude: data.city.coord.lon,
      city: data.city.name,
      temperature: data.list[0].main.temp,
      date1: data.list[0].dt,
      date2: data.list[8].dt,
      date3: data.list[16].dt,
      date4: data.list[24].dt,
      date5: data.list[32].dt,
      temp1: data.list[0].main.temp_max,
      temp2: data.list[8].main.temp_max,
      temp3: data.list[16].main.temp_max,
      temp4: data.list[24].main.temp_max,
      temp5: data.list[32].main.temp_max
    })
  }

  render() {
    return (
      <div>
        <Titles />
        <Weather
          getLocation={this.getLocation}
          getWeather={this.getWeather}
          convertDate={this.convertDate}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          city={this.state.city}
          temperature={this.state.temperature}
          />
        <Forecast
          date={this.state.date1}
          temp={this.state.temp1} />
        <Forecast
          date={this.state.date2}
          temp={this.state.temp2} />
        <Forecast
          date={this.state.date3}
          temp={this.state.temp3} />
        <Forecast
          date={this.state.date4}
          temp={this.state.temp4} />
        <Forecast
          date={this.state.date5}
          temp={this.state.temp5} />
      </div>
    );
  }
}

export default App;
