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
      return this.setState({
        unit: "C"
      });
    }
    // Change to Farenheit
    if (e.target.value === "farenheit") {
      return this.setState({
        unit: "F"
      });
    }
  };

  celciusToFarenheit = temperature => {
    return (temperature * (9 / 5) + 32).toFixed(1);
  };

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="weather-stats">
        {/* Location */}
        {props.city && props.country && (
          <p>
            <span className="location">
              {props.city}, {props.country}
            </span>
          </p>
        )}
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
        {/* Temperature */}
        {props.temperature && state.unit && (
          <p className="current-temperature">
            {state.unit === "C" && props.temperature + "°C"}
            {state.unit === "F" &&
              this.celciusToFarenheit(props.temperature) + "°F"}
          </p>
        )}
        {/* Min and Max Temperature */}
        {props.temp_min && props.temp_max && (
          <p>
            <span className="minmax">
              Min: {state.unit === "C" && props.temp_min + "°C"}
              {state.unit === "F" &&
                this.celciusToFarenheit(props.temp_min) + "°F"}
              &nbsp; Max: {state.unit === "C" && props.temp_max + "°C"}
              {state.unit === "F" &&
                this.celciusToFarenheit(props.temp_max) + "°F"}
            </span>
          </p>
        )}
        {/* Humidity */}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {/* Sunrise and Sunset */}
        {props.sunrise && props.sunset && (
          <p>
            Sunrise: {props.sunrise}
            &nbsp; Sunset: {props.sunset}
          </p>
        )}
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
        {/* Errors */}
        {props.error && <p>{props.error}</p>}
      </div>
    );
  }
}

export default Weather;
