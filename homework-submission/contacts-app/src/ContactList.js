import React, { Component } from "react";
import searchIcon from "./svg/Search.svg";

export default class ContactList extends Component {
  handleSelectContact = contact => {
    this.props.handleSelectContact(contact);
  };

  handleSearch = e => {
    this.props.handleSearch(e.target.value);
  };

  render() {
    const { contacts, searchText, activeContact } = this.props;
    const contactElements = contacts.map(contact =>
      this.renderAllContacts(contact, activeContact)
    );
    return (
      <div className="contact_list">
        <div className="contact_search">
          <span className="search_icon" src={searchIcon} alt="logo" />
          <input
            type="search"
            className="input_search"
            placeholder="search Contact"
            value={searchText}
            onChange={this.handleSearch.bind(this)}
          />
        </div>
        <div className="contacts_list">{contactElements}</div>
      </div>
    );
  }

  renderAllContacts = (contact, activeContact) => {
    return (
      <div
        key={contact.id}
        className={
          "rendered_contacts" + (contact === activeContact ? " active " : "")
        }
        onClick={this.handleSelectContact.bind(this, contact)}
      >
        <div className="contacts_icon">
          <img src={contact.profileImage} alt="contact icons" />
        </div>
        <div className="contacts_name">
          <div className="contact_firstName">{contact.firstName}</div>
          <div className="ccontact_lastName">{contact.lastName}</div>
        </div>
      </div>
    );
  };
}
