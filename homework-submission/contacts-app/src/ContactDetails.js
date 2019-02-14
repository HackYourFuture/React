import React, { Component } from "react";

export default class ContactDetails extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="contact_details">
        <div className="contact_header">
          <div className="contact_icon">
            <img src={contact.profileImage} alt="profileImage" />
          </div>
          <div className="contactdetail_name">
            <span className="first_name">{contact.firstName}</span>
            <span className="last_name">{contact.lastName}</span>
          </div>
        </div>
        <div className="details_info">
          {this.renderLeft(" MOBILE ", contact.mobile)}
          {this.renderLeft(" TELEPHONE ", contact.telephone)}
          {this.renderLeft(" EMAIL ", contact.email)}
          {this.renderLeft(" HOME ADDRESS ", contact.homeAddress)}
        </div>
      </div>
    );
  }
  renderLeft(label, value) {
    return (
      <div className="details_row">
        <label className="details_label">{label}</label>
        <span className="details_text">{value}</span>
      </div>
    );
  }
}
