import React from 'react';
import { getUsers } from '../../services/usersServices';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getUsers().then(users => {
      this.setState({ users });
    });
  }
  componentWillMount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <div>
        <h1>I am a users comp</h1>
        <div>
          {this.state.users ? (
            this.state.users.data.map(user => (
              <div key={user.id}>
                {user.first_name}
                <br />{' '}
              </div>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Users;
