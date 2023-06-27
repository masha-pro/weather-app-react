import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Weather from "./Weather";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-container">
        <Weather defaultCity="Kharkiv"/>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
reportWebVitals();
