import React, { Component } from "react";
import ContactLogo from "./svg/Contact.svg";
import create from "./svg/Create.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="contact_title">
          <img src={ContactLogo} className="contact-logo" alt="logo" />
          <h1 className="contact_title">Contacts</h1>
        </div>
        <div className="button_logo">
          <button className="btn" type="button">
            <img
              className="create_button"
              src={create}
              alt=""
              width={35}
              height={35}
            />
            <h3>Add Contact</h3>
          </button>
        </div>
      </div>
    );
  }
}
