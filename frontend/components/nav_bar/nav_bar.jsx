import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search";

// export default ({ currentUser, logout }) => {
//   const display = currentUser ? (
//     <div className="nav-curr-user">
//       <h3 className="welcome">Welcome {currentUser.username}</h3>
//       <SearchBar />
//       <div className="nav-profile-menu">
//         <i class="fas fa-user-circle"></i>
//       </div>
//       <button className="logout-btn" onClick={logout}>Log Out</button>
//     </div>
//   ) : (
//     <div className="nav-guest">
//         <Link className="img-youtube" to="/">
//           <img src={window.YoutubeURL} />
//         </Link>
//       <SearchBar />
//       <div className="nav-profile-menu">
//         <i className="fas fa-user-circle"></i>
//       </div>
//       <Link className="navbar-login-btn" to="/login">Sign In</Link>
//     </div>
//   );

//   return (
//     <header>
//       <div>{display}</div>
//     </header>
//   );
// };

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.getNavbar = this.getNavbar.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  getNavbar() {
    if (this.props.currentUser) {
      return (
        <div className='nav-curr-user'>
          <h3 className='welcome'>Welcome {this.props.currentUser.username}</h3>
          <SearchBar />
          <div>
            
          </div>
          <div className='nav-profile-menu'>
            <i onClick={this.showMenu} className='fas fa-user-circle'></i>
            {this.state.showMenu ? (
              <div className='navbar-menu'>
                <div className='logout-btn' onClick={this.logoutUser}>
                  <i className='fas fa-sign-out-alt'></i> Sign out
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div className='nav-guest'>
          <div></div>
          {/* <div className="nav-logo-wrapper">
            <Link className='img-youtube' to='/'>
              <img src={window.YoutubeURL} />
              <i class="fab fa-youtube"></i>
              <span className="nav-logo-text">WatchTube</span>
            </Link>
          </div> */}
          <SearchBar />
          {/* <div className='nav-profile-menu'>
            <i onClick={this.showMenu} className='fas fa-user-circle'></i>
            {this.state.showMenu ? (
              <div className='navbar-menu'>
                <Link className='navbar-login-btn' to='/login'>
                <i class="fas fa-user-circle signin"></i> Sign In
                </Link>
              </div>
            ) : null}
          </div> */}
          <div className='navbar-signin'>
            <Link className='navbar-login-btn' to='/login'>
              <i class="fas fa-user-circle signin navbar"></i> Sign In
            </Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return <>{this.getNavbar()}</>;
  }
}

export default Navbar;
