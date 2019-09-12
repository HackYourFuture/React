import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.user.photo} alt="" />
        </div>
        <h1>
          {this.props.user.name} {this.props.user.surname}
        </h1>

        <ul className="user-items">
          <li>
            <span>👤{this.props.user.gender}</span>
          </li>
          <li>
            <span>🌐{this.props.user.region}</span>
          </li>
          <li>
            <span>📞 {this.props.user.phone}</span>
          </li>
          <li>
            <span>🎂 {this.props.user.birthday.mdy}</span>
          </li>
          <li>
            <span>✉️ {this.props.user.email}</span>
          </li>
          <li>
            <span>🔑 {this.props.user.password}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserItem;
