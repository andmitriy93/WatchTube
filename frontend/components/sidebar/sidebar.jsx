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
    <div>
      <p>
        Log in to like videos, <br /> and comment, and subscribe
      </p>
      <button className="sidebar-btn-login">
        <Link className="link-login-btn" to="/login">Sign In</Link>
      </button>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-logo-wrapper">
        <Link className='img-youtube' to='/'>
          <img src={window.YoutubeURL} />
        </Link>
      </div>
      <ul className="sidebar-list">
        <li className="list-element">
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li className="list-element">
          <p>Trending</p>
        </li>
        <li className="list-element">
          <p>Subscriptions</p>
        </li>
        <div className="sidebar-greeting">{greeting}</div>
      </ul>
    </div>
  );
};
