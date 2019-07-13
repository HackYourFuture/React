import React from 'react';
import './homeworkweek3.css';

import { getUsers } from './services/getUsers';

class HomeworkWeek3 extends React.Component {
  state = {};

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  changeUsersList() {
    console.log('text');
  }

  render() {
    return (
      <div>
        <h1>I am users Component</h1>
        <div onClick={this.changeUsersList}>
          {this.state.users ? (
            this.state.users.map((user, index) => (
              <ul key={index}>
                <li>Name: {user.name}</li>
                <li>surname: {user.surname}</li>
                <li>gender: {user.gender} </li>
                <li>region: {user.region} </li>
              </ul>
            ))
          ) : (
            <h1>Data Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default HomeworkWeek3;
