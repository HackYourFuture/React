import React, { Component } from "react";

class ContactList extends Component {
  //   searchContact = e => {
  //     this.props.searchContact(e.target.value.toLowerCase());
  //   };

  render() {
    const { contacts, searchText } = this.props;
    const contactItems = contacts.map(contact =>
      this.renderAllContact(contact)
    );

    return (
      <div className="contact_list">
        <div className="contact_search">
          <input
            className="search_input"
            type="search"
            placeholder="Search contact"
            value={searchText}
            onChange={this.searchContact}
          />
        </div>
        <div className="contactlist__contacts">{contactItems}</div>
      </div>
    );
  }

  renderAllContact(contact) {
    return (
      <div className="contactlist__name">
        <div className="contactlist__firstName">{contact.firstName}</div>
        <div className="ccontactlist__lastName">{contact.lastName}</div>
      </div>
    );
  }
}
export default ContactList;
