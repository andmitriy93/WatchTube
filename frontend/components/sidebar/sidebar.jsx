import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <ul className="sideNav">
          <p className="home-link">
            <Link to="/">Home</Link>
          </p>
          <p>Trending</p>
          <p>Subscriptions</p>
          <li>
            <h4>
              Log in to like videos, <br /> and comment, and subscribe
            </h4>
            <button>
                <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
