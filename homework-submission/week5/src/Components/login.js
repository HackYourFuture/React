import React from 'react';
import MyFace from './myFace';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      status: 'logout'
    }
    //    this.onLoginChange = this.onLoginChange.bind(this);
  }

  onAuthorSubmitted = (e) => {
    if (this.state.login !== '') {
      this.setState({ status: "login" })
      console.log("Hello ", this.state.login);
      e.preventDefault();
    }

  }

  onLoginChange = (e) => {
    this.setState({ login: e.target.value });
    e.preventDefault();
  }

  handleStatus = (e) => {
    this.setState({ status: 'logout', login: '' });
  }

  checkLogin = () => {
    return this.state.status !== "logout" ?
      <MyFace author={this.state.login} status={this.state.status} handleStatus={this.handleStatus}></MyFace> : <div>
        <form onSubmit={this.onAuthorSubmitted}>
          <input type='text' value={this.state.login} onChange={this.onLoginChange} />
          <input type='submit' value='Login' />
        </form>
      </div>
  }

  render() {
    return (<div>{this.checkLogin()}</div>)
  }
}