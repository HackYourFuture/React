import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class Users extends Component {
  constructor(props) {
    super(props);

    this.createlist = this.createlist.bind(this);
  }

  createlist(user) {
    return (
      <div className="row">
        <li className="listItem">
          {user.name} {user.surname}
          <li>{user.gender}</li>
          <li>{user.region}</li>
        </li>
      </div>
    );
  }

  render() {
    const todoEntries = this.props.entries;
    const listusers = todoEntries.map(this.createlist);

    return (
      <ul className="thelist">
        <FlipMove duration={250} easing="ease-in">
          {listusers}
        </FlipMove>
      </ul>
    );
  }
}
export default Users;
