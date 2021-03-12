import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-curr-user">
      <SearchBar />
      <h3 className="welcome">Welcome {currentUser.username}</h3>
      <button onClick={logout}>Log Out</button>
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
    <header className="nav-bar">
      <div>{display}</div>
    </header>
  );
};
