import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-curr-user">
      <h3 className="welcome">Welcome {currentUser.username}</h3>
      <SearchBar />
      <button className="logout-btn" onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className="nav">
      <div className="logo">
        {/* <span>Menu</span> */}
        <Link className="img" to="/">
          <img src={window.YoutubeURL} />
        </Link>
      </div>
      <SearchBar />
      <div>
        <Link className="btn" to="/login">Sign In</Link>
      </div>
    </div>
  );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
};
