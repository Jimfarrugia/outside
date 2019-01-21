import React from "react";

export class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

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
        {props.temperature && (
          <p className="current-temperature">{props.temperature}</p>
        )}
        {/* Min and Max Temperature */}
        {props.temp_min && props.temp_max && (
          <p>
            <span className="minmax">
              Min: {props.temp_min}
              &nbsp; Max: {props.temp_max}
            </span>
          </p>
        )}
        {props.temperature && (
          <div className="toggle-temp">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-light">
                °C
              </button>
              <button type="button" className="btn btn-outline-light">
                °F
              </button>
            </div>
          </div>
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
        {/* Errors */}
        {props.error && <p>{props.error}</p>}
      </div>
    );
  }
}

export default Weather;
