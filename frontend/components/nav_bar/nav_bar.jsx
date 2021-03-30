import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search";


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      // darkTheme: false,
      // navOuter: 'nav-curr-user',
      // theme1: 'navbar-menu'
    };

    this.showMenu = this.showMenu.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.getNavbar = this.getNavbar.bind(this);
    // this.switchTheme = this.switchTheme.bind(this);
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

  // switchTheme(e) {
  //   e.preventDefault();
  //   if (this.state.darkTheme === false) {
  //     this.setState({
  //       darkTheme: !this.state.darkTheme,
  //       navOuter: 'nav-curr-user dark',
  //       theme1: 'navbar-menu.dark'
  //     })
  //   }else {
  //     this.setState({
  //       darkTheme: !this.state.darkTheme,
  //       navOuter: 'nav-curr-user',
  //       theme1: 'navbar-menu'
  //     })
  //   }
  // } 


  getNavbar() {
    if (this.props.currentUser) {
      return (
        <div className='nav-curr-user'>
        {/* <div className={this.state.navOuter}> */}
          <h3 className='welcome'>Welcome {this.props.currentUser.username}</h3>
          <SearchBar />
          <div>
          </div>
          <div className='nav-profile-menu'>
            <i onClick={this.showMenu} className='fas fa-user-circle'></i>
            {this.state.showMenu ? (
              <div className='navbar-menu'>
              {/* <div className={this.state.theme1}> */}
                <div className='logout-btn' onClick={this.logoutUser}>
                  <i className='fas fa-sign-out-alt'></i> Sign out
                </div>
                {/* <button onClick={this.switchTheme}>Dark Theme</button> */}
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div className='nav-guest'>
          <div></div>
          <SearchBar />
          <div className='navbar-signin'>
            <Link className='navbar-login-btn' to='/login'>
              <i className="fas fa-user-circle signin navbar"></i> Sign In
            </Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return(
      <>
        {this.getNavbar()}
      </>
    )
  }
}

export default Navbar;
