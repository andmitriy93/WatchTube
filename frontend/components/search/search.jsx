import React from "react";

const SearchBar = () => (
  <div className="search-btn">
    {/* <form action="/" method="GET"> */}
    <form className="search-bar-form">
      <label>
        <span className="visually-hidden"></span>
      </label>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        name="s"
      />
      <button className="search-bar-btn" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;
