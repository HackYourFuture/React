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
        <div className="list-items">
          <ul>
            <li>
              <span>
                {this.props.user.gender === 'female' ? (
                  <i className="fas fa-female"></i>
                ) : (
                  <i className="fas fa-male"></i>
                )}
                {this.props.user.gender}
              </span>
            </li>
            <li>
              <span>
                {<i className="fas fa-globe"></i>}
                {this.props.user.region}
              </span>
            </li>
            <li>
              <span>
                {<i className="fas fa-phone"></i>}
                {this.props.user.phone}
              </span>
            </li>
            <li>
              <span>
                {<i className="far fa-envelope"></i>}
                {this.props.user.email}
              </span>
            </li>
            <li>
              <span>
                {<i className="fas fa-key"></i>}
                {this.props.user.password}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserItem;
