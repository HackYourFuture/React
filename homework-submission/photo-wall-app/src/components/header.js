import React, { Component } from "react";
import logo from "../logo.png";

export default class Header extends Component {
  logOut = () => {
    this.setState({ loggedIn: this.props.loggedIn });
  };
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={this.props.backToHomePage}>Photo Wall</h1>
      </header>
    );
  }
}
