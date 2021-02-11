import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Sign in to continue to YouTuubee
        <br />
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        <br />
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default SessionForm;
