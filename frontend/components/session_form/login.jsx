import React from "react";
import { login } from "../../utils/session";
import { Link } from 'react-router-dom';

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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleDemo() {
    this.props.login({
      username: 'Demo User',
      password: '12345678',
    }).then(() => this.props.history.push())
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(this.props.history.push());
  }

  renderErrors() {
    return (
      <div className="error-render login">
        {this.props.errors.map((error, i) => (
          <li className="err-msg" key={`error-${i}`}>{error}</li>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="login-outter">
        <form className="login-form">

          <div className="login-container">

            <div className="si">
              <span>Sign in</span>
            </div>

            <div className="tcty">
              <span>to continue to WatchTube</span>
            </div>

            <div className="login-fields">
              <div className="usr-name-login">
                <label>
                  <input
                    type="text"
                    value={this.state.username}
                    placeholder="Enter your username"
                    onChange={this.update("username")}
                  />
                </label>
              </div>

              <div className="usr-psw-login">
                <label>
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update("password")}
                  />
                </label>
              </div>
              {this.renderErrors()}
            </div>
            <div className="login-buttons">
              <Link className="create-acc-link" to="/signup">Create account</Link>
              <button className="next-btn" onClick={this.handleSubmit}>Next</button>
            </div>
          </div>
        </form>
              <button className="demo-btn" onClick={() => this.handleDemo()}>Demo Login</button>
      </div>
    );
  }
}

export default Login;
