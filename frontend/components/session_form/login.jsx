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
        <form>

          <div className="g-logo">
              <img src={window.googleLogo} />
          </div>

          <div className="login-container">
            <div className="usr-name-login">
              <label>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Email or phone"
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

            <button onClick={this.handleSubmit}>Next</button>

              <Link className="create-acc" to="/signup">Create account</Link>

            <button className="demo" onClick={() => this.handleDemo()}>Demo Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
