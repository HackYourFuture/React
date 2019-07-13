import React, { Component } from 'react';
import './Homework3.css';
import { getUsers } from './services/usersServices';
import UserList from './Components/UserList/UserList';

/**
 * This class component is the container of the Users List
 * @return Here is the return of the Users List
 */
class Homework3 extends Component {
  state = {};

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="homework3">
        <h2 className="users-header">Users</h2>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Homework3;
