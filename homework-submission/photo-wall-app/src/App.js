import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/login-form";
import Main from "./components/main";

class App extends Component {
  state = {
    user: ""
  };
  handleLogin = user => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        {this.state.user.length > 0 ? (
          <Main state={this.state} />
        ) : (
          <LoginForm onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}
export default App;
