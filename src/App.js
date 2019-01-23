import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import "./App.css";

const API_KEY = "209534645722eb9b2c001a7df46d6eef";

class App extends React.Component {
  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    img: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity + "%",
        description: data.weather[0].description,
        img: getImage(data.weather[0].id),
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        img: undefined,
        error: "Please enter a location."
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <div className="container">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            img={this.state.img}
            error={this.state.error}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

/*
    Function:   getImage
    Arguments:  descriptionID
    Desc:       A descriptionID is passed in and if it matches the id of a weather description in the API, a relevant image url will be returned. If the conditions are not meant, log to the console.
*/
const getImage = descriptionID => {
  let URL = "";
  // 800: Clear
  if (descriptionID === 800) {
    return (URL = "img/sun.svg");
  }
  // 801: Few Clouds
  if (descriptionID === 801) {
    return (URL = "img/cloud-and-sun.svg");
  }
  // 80x: Clouds, 7xx: Atmosphere (haze, mist, etc)
  if (
    descriptionID.toString().charAt(0) === "8" ||
    descriptionID.toString().charAt(0) === "7"
  ) {
    return (URL = "img/cloud.svg");
  }
  // 6xx: Snow
  if (descriptionID >= 615) {
    return (URL = "img/snowstorm.svg");
  }
  if (descriptionID >= 600) {
    return (URL = "img/snow.svg");
  }
  // 5xx: Rain
  if (descriptionID >= 500) {
    return (URL = "img/rain.svg");
  }
  // 3xx: Drizzle
  if (descriptionID >= 300) {
    return (URL = "img/rain-and-sun.svg");
  }
  // 2xx: Thunderstorm
  if (descriptionID >= 200) {
    return (URL = "img/thunderstorm.svg");
  }
  return console.log(
    "Could not match current conditions with image. URL: " + URL
  );
};
