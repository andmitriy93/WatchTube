import React from "react";

const SearchBar = () => (
  <div className="search-btn">
  <form action="/" method="GET">
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input type="text" id="header-search" placeholder="Search" name="s" />
    <button className='search-bar-btn' type="submit">Search</button>
  </form>
  </div>
);

export default SearchBar;
