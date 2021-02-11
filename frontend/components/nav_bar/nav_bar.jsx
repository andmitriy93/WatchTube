import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {(currentUser, username)}</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );

  return <header className="nav-bar">{display}</header>;
};
