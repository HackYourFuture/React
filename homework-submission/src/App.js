import React, { Component } from "react";
import "./App.css";
import MockData from "./MockData";
import ContactList from "./ContactList";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      searchText: ""
    };
  }

  searchContact(e) {
    let currenList = MockData;

    let newList = [];

    if (e.target.value !== "") {
      currenList = this.props.items;
      newList = currenList.filter(item => {
        const contactList = item.toLowerCase();
        const filter = e.target.value.toLowerCase();

        return contactList.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({ filtered: newList });
  }

  render() {
    // const { contacts, searchText } = this.state;
    // // const contactsToLowerCase = searchText.toLowerCase();
    // // const filterContacts = contacts.filter(
    // //   contact =>
    // //     contact.firstName.toLowerCase().includes(contactsToLowerCase) ||
    // //     contact.LastName.toLowerCase().includes(contactsToLowerCase)
    // // );
    return (
      <div className="contact_app">
        <Header />
        <div className="container">
          <ContactList contacts={MockData} searchText={this.filtered} />
        </div>
      </div>
    );
  }
}

export default App;
