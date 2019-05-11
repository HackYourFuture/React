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
          this.setState({ error: err.message });
        });
    } else {
      this.setState({ error: 'Please press space' });
    }
  };

  handleError = () => {
    return this.state.error !== '' ? (
      <div>
        <div className="alert-danger">{this.state.error}</div>
        {this.clearErrorMsg()}
      </div>
    ) : (
      ''
    );
  };

  clearErrorMsg = () => {
    setTimeout(() => {
      this.setState({ error: '' });
    }, 2000);
  };

  setFocus = () => {
    this.refs.component.focus();
  };

  render() {
    let userData;
    userData = this.state.users.map(user => {
      return user ? <User key={user.name} data={user} /> : <Spinner />;
    });
    return (
      <div className="container" onClick={this.setFocus}>
        <div className="user_data_wrapper" onClick={this.setFocus}>
          {this.handleError()}

          {userData}
          <h1 className={`header ${this.state.show === false ? 'hidden' : ''}`}>Press Spacebar</h1>
        </div>
        <div ref="component" tabIndex="1" onKeyDown={this.handleKeyPress} className="component" />
      </div>
    );
  }
}

export default Week3;
