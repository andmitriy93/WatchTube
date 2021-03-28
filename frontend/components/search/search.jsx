import React from "react";

const SearchBar = () => (
  <div className="search-btn">
    <form className="search-bar-form">
      <label>
        <span className="visually-hidden"></span>
      </label>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
      />
      <button className="search-bar-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
);

export default SearchBar;
