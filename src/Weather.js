import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  function search() {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=93co25d01feb2baacba3f4a1c2ate2b7`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="weather-app">
        <div className="search-engine">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="🔍 Search City"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>

              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-warning shadow search-button w-100"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weather} />
        <hr />
        <WeatherForecast city={weather.city} />
      </div>
    );
  } else {
    search();

    return (
      <div>
        <p>Loading...</p>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      </div>
    );
  }
}
