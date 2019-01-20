import React from "react";

const Form = props => (
  <div id="form-wrapper">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button type="submit" className="btn-success">
        Get Weather
      </button>
    </form>
  </div>
);

export default Form;
