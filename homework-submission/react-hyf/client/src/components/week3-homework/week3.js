import React, { Component } from 'react';
import User from './user/user';
import Spinner from './spinner/spinner';
import './week3.css';

class Week3 extends Component {
  state = { users: [], loading: true, show: true, error: '' };

  componentDidMount() {
    this.setFocus();
    this.setState({ show: true });
  }

  handleKeyPress = e => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      fetch(' https://uinames.com/api/?amount=10')
        .then(res => res.json())
        .then(result => {
          const amount = result.slice(1, 2);
          this.setState({ users: amount, loading: false, show: false });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  setFocus = () => {
    this.refs.component.focus();
  };

  render() {
    let userData = <Spinner />;
    if (this.state.loading === false) {
      userData = this.state.users.map(user => {
        return <User key={user.name} data={user} />;
      });
    }
    return (
      <div className="container" onClick={this.setFocus}>
        <div className="user_data_wrapper" onClick={this.setFocus}>
          {userData}
          <h1 className={`header ${this.state.show === false ? 'hidden' : ''}`}>Press Spacebar</h1>
        </div>
        <div ref="component" tabIndex="1" onKeyDown={this.handleKeyPress} />
      </div>
    );
  }
}

export default Week3;
