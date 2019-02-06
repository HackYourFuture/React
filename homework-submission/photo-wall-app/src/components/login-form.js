import React, { Component } from 'react'
import Header from './header'

class LoginForm extends Component {
  state = {
    user: ''
  }
  handleInputChange = (event) => {
    this.setState({ user: event.target.value })
    console.log(this.state.user);

  }
  handleLogin = (event) => {
    event.preventDefault();
    (this.state.user.length > 0 && this.state.user !== 'User Name') ? this.props.onLogin(this.state.user) : alert('type your User Name')
  }

  render() {
    return (
      <div>
        <Header />

        <form className='login-form' onSubmit={this.handleLogin}>
          User Name :
      <input type='text' placeholder='User Name' name='userName' value={this.state.user.value} onChange={this.handleInputChange} />
          <input type='submit' value='log in' />
        </form>

      </div>
    )
  }
}


export default LoginForm;