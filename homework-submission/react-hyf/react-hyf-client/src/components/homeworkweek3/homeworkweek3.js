import React from 'react';
import { getUsers } from './services/getUsers';

class HomeworkWeek3 extends React.Component {
  state = {};

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default HomeworkWeek3;
