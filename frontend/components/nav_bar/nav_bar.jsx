import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-curr-user">
      <h3 className="welcome">Welcome {currentUser.username}</h3>
      <SearchBar />
      <div className="nav-profile-menu">
        <i class="fas fa-user-circle"></i>
      </div>
      <button className="logout-btn" onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className="nav-guest">
        <Link className="img-youtube" to="/">
          <img src={window.YoutubeURL} />
        </Link>
      <SearchBar />
      <div className="nav-profile-menu">
        <i class="fas fa-user-circle"></i>
      </div>
      <Link className="navbar-login-btn" to="/login">Sign In</Link>
    </div>
  );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
};
