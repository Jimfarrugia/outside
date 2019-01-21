import React from "react";

const Weather = props => (
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
    {/* Conditions */}
    {props.description && (
      <p>
        <span className="description">{props.description}</span>
      </p>
    )}
    {/* Temperature */}
    {props.temperature && (
      <p>
        <span className="temperature">{props.temperature}</span>
      </p>
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

export default Weather;
