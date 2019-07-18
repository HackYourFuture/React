import React, { Component } from 'react';
import './Homework3.css';
import { getUsers } from './services/usersServices';
import UserList from './Components/UserList/UserList';

/**
 * This class component is the container of the Users List
 * @return Here is the return of the Users List
 */
class Homework3 extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="homework-header">Homework 3</h2>
        <div className="homework3">
          <h3 className="users-header">Users</h3>
          <UserList users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default Homework3;
