import React from "react";
import { GoLocation } from "react-icons/go";
import "../src/App.css";
function SearchBar() {
  return (
    <div className="search-area">
      <div className="search-icon">
        <GoLocation />
      </div>
      <div className="search-bar">
        <input type="text" />
      </div>
      <div className="search-btn">
        <button style={{ padding: "3px" }}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
