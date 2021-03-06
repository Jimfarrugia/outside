import React from "react";

export class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: "C"
    };
  }

  changeUnit = e => {
    // Change button styles
    if (e.target.classList.contains("btn-outline-light")) {
      // Switch button styles on other button
      document.querySelector(".btn-light").classList.add("btn-outline-light");
      document
        .querySelector(".btn-light.btn-outline-light")
        .classList.remove("btn-light");
      // then the clicked button
      e.target.classList.remove("btn-outline-light");
      e.target.classList.add("btn-light");
    }
    // Change to celcius
    if (e.target.value === "celcius") {
      return this.setState({ unit: "C" });
    }
    // Change to Farenheit
    if (e.target.value === "farenheit") {
      return this.setState({ unit: "F" });
    }
  };

  kelvinToCelcius = temperature => {
    return parseFloat((temperature - 273.15).toFixed(1));
  };
  kelvinToFarenheit = temperature => {
    return parseFloat(((temperature - 273.15) * (9 / 5) + 32).toFixed(1));
  };

  render() {
    const { unit } = this.state;
    const props = this.props;
    return (
      <div className="weather-stats">
        {/* Location */}
        {props.city && props.country && (
          <p className="location">
            {props.city}, {props.country}
          </p>
        )}
        <div className="row">
          <div className="col-sm">
            {/* Image */}
            {props.img && (
              <p className="image-wrapper">
                <img src={props.img} alt={props.description} />
              </p>
            )}
            {/* Description */}
            {props.description && (
              <p>
                <span className="description">{props.description}</span>
              </p>
            )}
          </div>
          <div className="col-sm">
            {/* Change Temperature Unit*/}
            {props.temperature && (
              <div className="changeUnit">
                <div className="btn-group" role="group">
                  <button
                    onClick={this.changeUnit}
                    type="button"
                    className="btn btn-light"
                    value="celcius"
                  >
                    °C
                  </button>
                  <button
                    onClick={this.changeUnit}
                    type="button"
                    className="btn btn-outline-light"
                    value="farenheit"
                  >
                    °F
                  </button>
                </div>
              </div>
            )}
            {/* Temperature */}
            {props.temperature && (
              <p className="current-temperature">
                {unit === "C" && this.kelvinToCelcius(props.temperature) + "°C"}
                {unit === "F" &&
                  this.kelvinToFarenheit(props.temperature) + "°F"}
              </p>
            )}
            {/* Min and Max Temperature */}
            {props.temp_min && props.temp_max && (
              <p>
                <span className="minmax">
                  Min:{" "}
                  {unit === "C" && this.kelvinToCelcius(props.temp_min) + "°C"}
                  {unit === "F" &&
                    this.kelvinToFarenheit(props.temp_min) + "°F"}
                  <br /> Max:{" "}
                  {unit === "C" && this.kelvinToCelcius(props.temp_max) + "°C"}
                  {unit === "F" &&
                    this.kelvinToFarenheit(props.temp_max) + "°F"}
                </span>
              </p>
            )}
            {/* Humidity */}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
          </div>
        </div>
        {/* Errors */}
        {props.error && <p>{props.error}</p>}
      </div>
    );
  }
}

export default Weather;
