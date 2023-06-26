import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function WeatherSummary() {
  let [city, setCity] = useState("Kharkiv");
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let search = (
    <header className="search-engine-section">
      <form id="search-engine" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              className="form-control"
              placeholder="🔍 Search City"
              autoFocus="on"
              autoComplete="off"
              id="search-input"
              onChange={updateCity}
            />
          </div>

          <div className="col-2">
            <button
              type="submit"
              className="btn btn-warning shadow-sm search-button"
              id="search-button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </header>
  );

  if (weather) {
    return (
      <div className="Weather">
        {search}
        <div className="row">
          <div className="col-8">
            <ul className="summary">
              <li>{city}</li>
              <li>
                <span>{Math.round(weather.temperature)}</span>
                <span className="degrees">
                  <a href="/"> °C </a> | <a href="/"> °F </a>
                </span>
              </li>
              <li>
                <div className="last-updated">
                  Last updated: <span>Monday 15:00</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <img
              src={weather.icon}
              alt={weather.description}
              className="weather-icon"
            />
            <div className="description">{weather.description}</div>
          </div>
        </div>

        <hr />

        <div className="WeatherDetails">
          <div className="row">
            <div className="col-4">
              <ul className="details">
                <li>
                  Feels like: {""}
                  <span>{Math.round(weather.feelsLike)}</span>°C
                </li>
                <li>
                  Wind Speed: <span>{Math.round(weather.wind)}</span> km/h
                </li>
              </ul>
            </div>

            <div className="col-4">
              <ul className="details">
                <li>
                  Humidity: <span>{weather.humidity}</span>%
                </li>
                <li>
                  Pressure: <span>{weather.pressure}</span> mb
                </li>
              </ul>
            </div>

            <div className="col-4">
              <ul className="details">
                <li>
                  Max Temperature: <span>{Math.round(weather.tempMax)}</span>°C
                </li>
                <li>
                  Min Temperature: <span>{Math.round(weather.tempMin)}</span>°C
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{search}</div>;
  }
}
