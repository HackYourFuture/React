import React from 'react';
class Login extends React.Component {
  state = {
    userName: '',
    isLoggedIn: false,
  };

  onUserInput = e => {
    this.setState({ userName: e.target.value });
  };

  onLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.userName}
          name="userName"
          onChange={this.onUserInput}
        />
        <input type="submit" value="login" name="login" onClick={this.onLogIn} />
      </form>
    );
  }
}

export default Login;
