import React, { Component } from 'react';

export class User extends Component {
  render() {
    const { users } = this.props;
    const random_user = Math.floor(Math.random() * users.length);
    return (
      <div style={{ textAlign: 'center' }}>
        {
          users.map((user, i) => (
            <React.Fragment>
              <h1 style={{ fontSize: '400%' }}>{`${user.name} ${user.surname}`}</h1>
              <ul style={user_info_list_style}>
                <li>👤 {user.gender}</li>
                <li>🌐 {user.region}</li>
              </ul>
            </React.Fragment>
          ))[random_user]
        }
      </div>
    );
  }
}

// STYLES
// user_info_list_style
const user_info_list_style = {
  width: '15%',
  margin: 'auto auto 7%',
  listStyle: 'none',
  fontSize: '150%',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
  background: 'rgba(255, 255, 255, 0.1)',
};

export default User;
