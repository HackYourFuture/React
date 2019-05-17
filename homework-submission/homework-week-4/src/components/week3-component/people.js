import React, { Component } from 'react';
import './people.css';
import logo from './logo.svg';

// Main Component
class People extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(people =>
        this.setState(
          {
            isLoaded: true,
            people
          },
          () => console.log('People fetched..', people)
        )
      )
      .catch(error => alert('Fetch Unsuccessful\n' + error));
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shuffle People !</h1>
        </header>
        <ul>
          {this.state.people.map((person, i) => (
            <div key={i}>
              <HeaderElement content={person.name + ' ' + person.surname} />
              <ListElement title="Gender" content={person.gender} />
              <ListElement title="Region" content={person.region} />
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

// Header Component
const HeaderElement = ({ content }) => <h1>{content}</h1>;

// List Component
const ListElement = ({ title, content }) => (
  <li>
    {title}: {content}
  </li>
);

export default People;
