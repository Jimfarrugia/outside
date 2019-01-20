import React from "react";

const Form = props => (
  <div className="location-form form-group">
    <form onSubmit={props.getWeather}>
      <div className="row">
        <div className="col">
          <label className="sr-only" htmlFor="city">
            Enter a city.
          </label>
          <input
            type="text"
            id="city"
            className="form-control"
            name="city"
            placeholder="City..."
          />
        </div>
        <div className="col">
          <label className="sr-only" htmlFor="country">
            Enter a country.
          </label>
          <input
            type="text"
            id="country"
            className="form-control"
            name="country"
            placeholder="Country..."
          />
        </div>
        <button type="submit" className="btn-success">
          Search
        </button>
      </div>
    </form>
  </div>
);

export default Form;
