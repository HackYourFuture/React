import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
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
        <Header />
        {this.state.user.length > 0 ? <Post user={this.state.user} /> : <LoginForm onLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
