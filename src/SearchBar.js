import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <header className="search-engine-section">
      <form id="search-engine">
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="🔍 Search City"
              autoFocus="on"
              autoComplete="off"
              id="search-input"
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

          <div className="col-3">
            <button
              type="button"
              className="btn btn-danger shadow-sm search-button"
              id="current-location-button"
            >
              Current city
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
