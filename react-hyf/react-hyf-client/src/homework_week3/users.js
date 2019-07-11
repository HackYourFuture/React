import React from 'react';
import fetchUsers from './Components/fetchData';
import RenderUser from './Components/renderUser';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    fetchUsers().then(users => this.setState({ users }));
  };

  render() {
    return (
      <div>
        {this.state.users ? <RenderUser data={this.state.users} /> : <h1>Something wrong</h1>}
      </div>
    );
  }
}

export default Users;
