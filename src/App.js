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
    humidity: undefined,
    wind: undefined,

    type: undefined,
    type1: undefined,
    type2: undefined,
    type3: undefined,
    type4: undefined,
    type5: undefined,

    date: undefined,
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

      humidity: data.list[0].main.humidity,
      wind: data.list[0].wind.speed,

      date: data.list.dt,
      date1: data.list[0].dt_txt,
      date2: data.list[8].dt_txt,
      date3: data.list[16].dt_txt,
      date4: data.list[24].dt_txt,
      date5: data.list[32].dt_txt,

      temp: data.list[0].main.temp,
      temp1: data.list[8].main.temp_max,
      temp2: data.list[16].main.temp_max,
      temp3: data.list[24].main.temp_max,
      temp4: data.list[32].main.temp_max,
      temp5: data.list[39].main.temp_max,

      type: data.list[0].weather[0].main,
      type1: data.list[8].weather[0].main,
      type2: data.list[16].weather[0].main,
      type3: data.list[24].weather[0].main,
      type4: data.list[32].weather[0].main,
      type5: data.list[39].weather[0].main,
    })
  }



  render() {
    return (
      <div>
        <Titles />
        <Weather
          getLocation={this.getLocation}
          getWeather={this.getWeather}
          date={this.state.date}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          city={this.state.city}
          temp={this.state.temp}
          type={this.state.type}
          humidity={this.state.humidity}
          wind={this.state.wind}
          />
        <Forecast
          date={this.state.date1}
          temp={this.state.temp1}
          type={this.state.type1} />
        <Forecast
          date={this.state.date2}
          temp={this.state.temp2}
          type={this.state.type2} />
        <Forecast
          date={this.state.date3}
          temp={this.state.temp3}
          type={this.state.type3} />
        <Forecast
          date={this.state.date4}
          temp={this.state.temp4}
          type={this.state.type4} />
        <Forecast
          date={this.state.date5}
          temp={this.state.temp5}
          type={this.state.type5} />
      </div>
    );
  }
}

export default App;
