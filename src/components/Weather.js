import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && (
      <p>
        Location: {props.city}, {props.country}
      </p>
    )}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.temp_min && props.temp_max && (
      <p>
        Min: {props.temp_min} &nbsp;|&nbsp; Max: {props.temp_max}
      </p>
    )}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.sunrise && props.sunset && (
      <p>
        Sunrise: {props.sunrise} <br />
        Sunset: {props.sunset}
      </p>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
