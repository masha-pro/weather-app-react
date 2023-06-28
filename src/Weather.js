import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
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

  if (weather.ready) {
    return (
      <div className="Weather">
        <header className="search-engine-section">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="🔍 Search City"
                  autoFocus="on"
                  autoComplete="off"
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
        </header>

        <div className="current-weather">
          <div className="row">
            <div className="col-6">
              <div className="current-city">{weather.city}</div>
              <ul className="weather-description">
                <li>
                  <FormattedDate date={weather.date} />
                </li>
                <li className="text-capitalize">{weather.description}</li>
                <li>
                  Wind:{" "}
                  <span className="accent">
                    {Math.round(weather.wind)} km/h{" "}
                  </span>
                  , Humidity:{" "}
                  <span className="accent">{weather.humidity}% </span>
                </li>
              </ul>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <div className="weather-summary">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="weather-icon"
                />{" "}
                <span className="temp">
                  <span className="temp-value">
                    {Math.round(weather.temperature)}
                  </span>
                  <span className="degrees">
                    <a href="/"> °C </a> | <a href="/"> °F </a>
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  } else {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=93co25d01feb2baacba3f4a1c2ate2b7`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
