import React from "react";
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  // handleDemo() {
  //   this.props.createNewUser({
  //     username: 'Demo User',
  //     email: 'user_demo@gmail.com',
  //     password: '123456'
  //   }).then(() => this.props.history.push())
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.history.push());
  }

  renderErrors() {
    return (
      <div className="error-render">
        {this.props.errors.map((error, i) => (
          <li className="err-msg" key={`error-${i}`}>{error}</li>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <form>

          <span className="cga">Create your Google Account</span>
          <span className="cty">to continue to Youtube</span>

          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>

          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br />

          <button onClick={this.handleSubmit}>Next</button>
          {/* <button className="demo" onClick={() => this.handleDemo()}>Demo Login</button> */}
          <Link to="/login">
            <button>Sign in instead</button>
          </Link>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Signup;
