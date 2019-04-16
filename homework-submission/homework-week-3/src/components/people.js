import React, { Component } from 'react';
import './people.css';

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
      );
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          {this.state.people.map((person, i) => (
            <div>
              <HeaderElement key={i} content={person.name + ' ' + person.surname} />
              <ListElement key={i} title="Gender" content={person.gender} />
              <ListElement key={i} title="Region" content={person.region} />
            </div>
          ))}
        </ul>
      </div>
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
