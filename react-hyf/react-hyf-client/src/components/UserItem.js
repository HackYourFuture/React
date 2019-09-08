import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div>
          <img src={this.props.user.photo} alt="" />
        </div>
        <h1>
          {this.props.user.name}

          {this.props.user.surname}
        </h1>
        <div className="list-items">
          <ul>
            <li>
              <span>{this.props.user.gender}</span>
            </li>
            <li>
              <span>{this.props.user.region}</span>
            </li>
            <li>
              <span>{this.props.user.phone}</span>
            </li>
            <li>
              <span>{this.props.user.email}</span>
            </li>
            <li>
              <span>{this.props.user.password}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserItem;
