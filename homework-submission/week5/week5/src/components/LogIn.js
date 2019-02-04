import React from 'react'

export default class LogIn extends React.Component {
  state = {
    user: '',
  }
  userLogIn = (e) => {
    const userName = e.target.value;
    this.setState({ user: userName })

  }
  onSubmit = (e) => {
    const userName = this.state.user;
    if (userName !== '') {
      this.props.logInHandler(userName);
      e.preventDefault();
    }
    else {
      alert('Please enter your name');
      e.preventDefault();
    }
  }
  render() {


    return (
      <form onSubmit={this.onSubmit} >
        <input type='text' placeholder='user name' onChange={this.userLogIn} className="input-box" />
        <br></br>
        <input type='submit' value='Login' className="button-box" />
      </form>
    )
  }
}