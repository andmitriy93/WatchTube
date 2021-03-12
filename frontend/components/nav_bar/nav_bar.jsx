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
        <Link className="img-youtube" to="/">
          <img src={window.YoutubeURL} />
        </Link>
      <SearchBar />
      <Link className="navbar-login-btn" to="/login">Sign In</Link>
    </div>
  );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
};
