import React from "react";
import { login } from "../../utils/session";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleDemo() {
    this.props.login({
      username: 'Demo User',
      // email: 'user_demo@gmail.com',
      password: '123456'
    }).then(() => this.props.history.push())
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(this.props.history.push()); // not sure what it does
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
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button onClick={this.handleSubmit}>Confirm</button>
          <button className="demo" onClick={() => this.handleDemo()}>Demo Login</button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Login;
