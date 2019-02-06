import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login-form'
import Post from './components/post'

class App extends Component {
  state = {
    loading: false,
    user: ''
  }
  handleLogin = (user) => {
    this.setState({ user })
  }


  render() {

    return (
      <div className="App">
        {this.state.user.length > 0 ?
          <Post state={this.state} /> : <LoginForm onLogin={this.handleLogin} />}
      </div>
    );
  }

}
export default App;
