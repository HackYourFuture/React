import React, { Component } from "react";
import "./index.css";
import Header from "./Header";
import MockData from "./MockData";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      filteredContacts: [],
      activeContact: MockData[0],
      searchText: ""
    };
  }

  handleSelectContact(contact) {
    console.log("something happaning", contact);
    this.setState({
      activeContact: contact
    });
  }

  handleSearch(searchText) {
    console.log("something happening", searchText);
    this.setState({ searchText });
  }

  render() {
    const { contacts, searchText, activeContact } = this.state;
    const c = searchText.toLowerCase();
    const filteredContacts = contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(c) ||
        contact.lastName.toLowerCase().includes(c)
    );
    return (
      <div className="contact-app">
        <Header />
        <div className="container">
          <ContactList
            contacts={filteredContacts}
            activeContact={activeContact}
            handleSelectContact={this.handleSelectContact.bind(this)}
            searchText={searchText}
            handleSearch={this.handleSearch.bind(this)}
          />
          <ContactDetails contact={activeContact} />
        </div>
      </div>
    );
  }
}
