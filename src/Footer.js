import React from "react";
import "./Footer.css";

export default function DailyForecast() {
  return (
    <footer>
      <div>
        The project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/mpavlenko-pm/"
          target="_blank"
          rel="noreferrer"
        >
          Mariia Pavlenko
        </a>
        , is{" "}
        <a
          href="https://github.com/masha-pro/weather-app-react.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://react-weather-app-mashapro.netlify.app/">
          hosted on Netlify
        </a>
        .
      </div>
    </footer>
  );
}
