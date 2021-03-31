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
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

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
      <div className="signup-outter">
        <form className="signup-form">

          <div className="create-acc-container">
            <div className="cga">
              <span>Create your Account</span>
            </div>

            <div className="cty">
              <span>to continue to YouTuubee</span>
            </div>

            <div className="signup-fields">
              <div className="username-field">
                <label>
                  <input
                    type="text"
                    value={this.state.username}
                    placeholder="Full name"
                    onChange={this.update("username")}
                  />
                </label>
              </div>

              <div className="email-field">
                <label>
                  <input
                    type="text"
                    value={this.state.email}
                    placeholder="Your email adress"
                    onChange={this.update("email")}
                  />
                </label>
              </div>

              <div className="password-field">
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
            <br />

            <Link className="sign-in-instead" to="/login">Sign in instead</Link>
            
            <button onClick={this.handleSubmit}>Next</button>
            
          </div>
          <div className="signup-img">
            <img src="https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/account.svg" alt=""/>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
