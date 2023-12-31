import React from "react";

import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="current-weather">
      <div className="row">
        <div className="col-6">
          <div className="current-city">{props.data.city}</div>
          <ul className="weather-description">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Wind:{" "}
              <span className="accent">
                {Math.round(props.data.wind)} km/h{" "}
              </span>
              , Humidity:{" "}
              <span className="accent">{props.data.humidity}% </span>
            </li>
          </ul>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <div className="weather-summary">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />{" "}
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
