import React, { Component } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="header_icon">
          <i className="fas fa-address-book" />
        </span>
        <h1 className="header_name">Contacts</h1>
      </div>
    );
  }
}

export default Header;
