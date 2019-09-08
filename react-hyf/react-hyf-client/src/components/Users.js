import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserItem key={user.id} />
        ))}
      </div>
    );
  }
}

export default Users;
