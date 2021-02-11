import React from 'react';
import { login } from '../../utils/session';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.history.push()) // not sure what it does
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <label>Username:
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <label>Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;