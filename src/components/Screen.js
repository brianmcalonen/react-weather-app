import React from "react";

class Screen extends React.Component {
  render() {
    const style = {
      background: "linear-gradient(to top, #80d0c7, #13547a)",
      color: "white",
      width: "400px",
      height: "600px",
      //   margin: "0 auto",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translateX(-50%)",
      //   transform: "translateY(-50%)",

      textAlign: "center",
      padding: "10px",
      borderRadius: "8px",
      border: "5px solid darkgrey",
      position: "relative"
    };

    const row = {
      display: "grid",
      position: "absolute",
      bottom: "0",
      right: "4px",
      margin: "0 !important",
      gridTemplateColumns: "auto auto auto auto",
      gridGap: "8px"
    };

    const col = {
      border: "1px solid white",
      height: "200px",
      width: "90px"
    };
    return (
      <div style={style}>
        <h1>Local Weather App</h1>
        <p>{this.props.date}</p>
        <p>{this.props.city}</p>
        <hr />

        <p>{this.props.temp} °F</p>
        <p>{this.props.type}</p>
        <p>Humidity: {this.props.humidity}%</p>
        <p>Wind: {this.props.wind} mph</p>

        <div style={row}>
          <div style={col}>
            <div>{this.props.date2}</div>
            <div>{this.props.temp2}</div>
            <div>{this.props.type2}</div>
          </div>
          <div style={col}>
            <div>{this.props.date3}</div>
            <div>{this.props.temp3}</div>
            <div>{this.props.type3}</div>
          </div>
          <div style={col}>
            <div>{this.props.date4}</div>
            <div>{this.props.temp4}</div>
            <div>{this.props.type4}</div>
          </div>
          <div style={col}>
            <div>{this.props.date5}</div>
            <div>{this.props.temp5}</div>
            <div>{this.props.type5}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
