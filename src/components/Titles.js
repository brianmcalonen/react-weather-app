import React from "react";

class Titles extends React.Component {
  render() {
    const titlesStyle = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      borderRadius: "5px",
      width: "94%",
      margin: "0 auto",
      marginBottom: "20px",
      padding: "20px",
      textAlign: "center"
    };

    return (
      <div style={titlesStyle}>
        <h1>React Weather App</h1>
        <p>Find your local conditions</p>
      </div>
    );
  }
}

export default Titles;
