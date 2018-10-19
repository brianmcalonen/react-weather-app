import React from "react";

class Titles extends React.Component {
  render() {
    const titlesStyle = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      borderRadius: "5px",
      width: "74%",
      margin: "0 auto",
      marginBottom: "20px",
      padding: "20px",
      textAlign: "center"
    };

    return (
      <div style={titlesStyle}>
        <h1>React Weather App</h1>
        <p>Find your local conditions</p>
        {/* <button
          onClick={this.props.getLocation}
          type="button"
          class="btn btn-primary"
        >
          Current Location
        </button>
        <button onClick={this.props.getWeather} class="btn btn-primary">
          Get Weather
        </button> */}
      </div>
    );
  }
}

export default Titles;
