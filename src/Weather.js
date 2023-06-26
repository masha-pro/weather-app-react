import React from "react";
import "./Weather.css";

export default function WeatherSummary() {
  let weatherData = {
    city: "Kharkiv",
    temperature: 27,
    date: "Monday 15:00",
    description: "few clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    feelsLike: 25,
    wind: 14,
    humidity: 31,
    pressure: 1016,
    maxTemp: 27,
    minTemp: 15,
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <ul className="summary">
            <li>{weatherData.city}</li>
            <li>
              <span>{weatherData.temperature}</span>
              <span className="degrees">
                <a href="/"> °C </a> | <a href="/"> °F </a>
              </span>
            </li>
            <li>
              <div className="last-updated">
                Last updated: <span>{weatherData.date}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <img
            src={weatherData.imgUrl}
            alt="weather icon"
            className="weather-icon"
          />
          <div className="description">{weatherData.description}</div>
        </div>
      </div>

      <hr />

      <div className="WeatherDetails">
        <div className="row">
          <div className="col-4">
            <ul className="details">
              <li>
                Feels like:
                <span> {weatherData.feelsLike}</span>°C
              </li>
              <li>
                Wind Speed: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="details">
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Pressure: <span>{weatherData.pressure}</span> mb
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="details">
              <li>
                Max Temperature: <span>{weatherData.maxTemp}</span>°C
              </li>
              <li>
                Min Temperature: <span>{weatherData.minTemp}</span>°C
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
