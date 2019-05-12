import React, { Component } from 'react';

// Users
class Users extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(users =>
        this.setState({
          isLoaded: true,
          people: users,
        }),
      )
      .catch(err => err);
  }

  render() {
    const HeaderComponent = ({ content }) => <h1>{content}</h1>;

    const ListComponent = ({ title, content }) => (
      <li>
        {title}: {content}
      </li>
    );

    return (
      <div>
        <ul>
          {this.state.people.map((user, i) => (
            <div>
              <HeaderComponent key={Date.now()} content={user.name + ' ' + user.surname} />
              <ListComponent key={Date.now()} title="Gender" content={user.gender} />
              <ListComponent key={Date.now()} title="Region" content={user.region} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
