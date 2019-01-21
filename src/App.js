import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "209534645722eb9b2c001a7df46d6eef";

class App extends React.Component {
  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    sunrise: undefined,
    sunset: undefined,
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
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    const translateTime = time => {
      let date = new Date(time * 1000),
        ampm = date.getHours() < 13 ? "am" : "pm",
        hour =
          ((date.getHours() % 12 || 12) < 10 ? "0" : "") +
          (date.getHours() % 12 || 12),
        mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        readableTime = hour + ":" + mins + ampm;
      return readableTime;
    };

    const kelvinToCelcius = temperature => {
      return (temperature - 273.15).toFixed(1) + "°C";
    };

    // function: getImage will determine which image url to use based on the current weather conditions/description
    const getImage = description => {
      let URL = "";

      switch (description) {
        case "clear sky":
          URL = "img/sun.svg";
          break;
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
          URL = "img/cloud-and-sun.svg";
          break;
        case "mist":
          URL = "img/cloud.svg";
          break;
        case "shower rain":
        case "rain":
          URL = "img/rain.svg";
          break;
        case "thunderstorm":
          URL = "img/thunderstorm.svg";
          break;
        case "snow":
          URL = "img/snow.svg";
          break;
        default:
          console.log("Could not match weather description with an image");
          break;
      }

      return URL;
    };

    if (city && country) {
      console.log(data);

      this.setState({
        temperature: kelvinToCelcius(data.main.temp),
        temp_min: kelvinToCelcius(data.main.temp_min),
        temp_max: kelvinToCelcius(data.main.temp_max),
        sunrise: translateTime(data.sys.sunrise),
        sunset: translateTime(data.sys.sunset),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity + "%",
        description: data.weather[0].description,
        // img
        img: getImage(data.weather[0].description),
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        sunrise: undefined,
        sunset: undefined,
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
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            img={this.state.img}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
