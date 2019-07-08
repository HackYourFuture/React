import React from 'react';
import { getUsers } from '../../services/usersServices';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }
  render() {
    return (
      <div>
        <h1>I am users Component</h1>
        <div>
          {this.state.users ? (
            this.state.users.data.map(user => <div>{user.first_name} </div>)
          ) : (
            <h1>Data Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Users;
