import React from "react";
import { Link } from "react-router-dom";

// class SideBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="sidebar">
//         <ul className="sideNav">
//           <li className="home-link">
//             <p>
//               <Link to="/">Home</Link>
//             </p>
//           </li>
//           <li>
//             <p>Trending</p>
//           </li>
//           <li>
//             <p>Subscriptions</p>
//           </li>
//           if ()
//           <li>
//             <p>
//               Log in to like videos, <br /> and comment, and subscribe
//             </p>
//             <button className="btn-login">
//                 <Link to="/login">Login</Link>
//             </button>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default SideBar;

export default ({ currentUser }) => {
  const greeting = currentUser ? (
    <div></div>
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
          {/* <img src={window.YoutubeURL} /> */}
          {/* <img src={window.WatchTube} /> */}
          <i className='fab fa-youtube logo'></i>
          <span className='sidebar-watchtube'>WatchTube</span>
        </Link>
      </div>
      <ul className='sidebar-list'>
        <li className='list-element'>
          <p>
            <Link className='list-link-home' to='/'>
              <i className='fas fa-home'></i>Home
            </Link>
          </p>
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
        {/* <div className="sidebar-greeting">{greeting}</div> */}

        {/* <li className="list-element">
          <a className="contact" href="https://github.com/andmitriy93" target="_blank"><i className='fa fa-github'></i></a>
          <a className="contact" href="https://www.linkedin.com/in/dmitriy-an/" target="_blank"><i className='fa fa-linkedin'></i></a>
          <a className="contact" href="https://angel.co/u/dmitrii-an" target="_blank"><i className='fa fa-angellist'></i></a>
        </li> */}
      </ul>
      <footer>
        {/* <li className="list-element"> */}
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
        {/* </li> */}
      </footer>
    </div>
  );
};
