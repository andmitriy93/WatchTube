import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser }) => {
  const greeting = currentUser ? (
    <></>
  ) : (
    <div className='list-element login'>
      <p>
        Log in to like videos,
        <br /> and comment, and subscribe
      </p>
      <button className='sidebar-btn-login'>
        <Link className='link-login-btn' to='/login'>
          <i className='fas fa-user-circle signin'></i>Sign In
        </Link>
      </button>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar-logo-wrapper'>
        <Link className='img-youtube' to='/'>
          <i className='fab fa-youtube logo'></i>
          <span className='sidebar-watchtube'>WatchTube</span>
        </Link>
      </div>
      <ul className='sidebar-list'>
        <li className='list-element'>
          <Link className='list-link-home' to='/'>
            <p>
              <i className='fas fa-home'></i>Home
            </p>
          </Link>
        </li>
        <li className='list-element'>
          <p>
            <i className='fas fa-compass'></i>Explore
          </p>
        </li>
        <li className='list-element'>
          <p>
            <i className='fab fa-youtube'></i>Subscriptions
          </p>
        </li>
        <div className="sidebar-greeting">{greeting}</div>
      </ul>
      <footer>
        <a
          className='contact'
          href='https://github.com/andmitriy93'
          target='_blank'
        >
          <i className='fa fa-github'></i>
        </a>
        <a
          className='contact'
          href='https://www.linkedin.com/in/dmitriy-an/'
          target='_blank'
        >
          <i className='fa fa-linkedin'></i>
        </a>
        <a
          className='contact'
          href='https://angel.co/u/dmitrii-an'
          target='_blank'
        >
          <i className='fa fa-angellist'></i>
        </a>
      </footer>
    </div>
  );
};
