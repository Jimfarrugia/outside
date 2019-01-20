import React from "react";

const Weather = props => (
  <div className="weather-stats">
    {props.city && props.country && (
      <p>
        <span className="location">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p>
        <span className="temperature">{props.temperature}</span>
      </p>
    )}
    {props.temp_min && props.temp_max && (
      <p>
        <span className="minmax">
          Min: {props.temp_min}
          &nbsp; Max: {props.temp_max}
        </span>
      </p>
    )}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.sunrise && props.sunset && (
      <p>
        Sunrise: {props.sunrise}
        &nbsp; Sunset: {props.sunset}
      </p>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
