import React from "react";
import logo from "../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
