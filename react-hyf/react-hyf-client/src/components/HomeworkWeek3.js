import React, { Component } from 'react';
import UserItem from './UserItem';
import SpaceBar from './SpaceBar';
import Spinner from './Spinner';
import '../App.css';

class HomeworkWeek3 extends Component {
  state = {
    users: [],
    error: false,
    isLoading: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        this.setState({ isLoading: true });

        const API_URL = 'https://uinames.com/api/?amount=1&ext';

        fetch(API_URL)
          .then(response => response.json())
          .then(data => this.setState({ users: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      }
    });
  }

  render() {
    const { error, isLoading } = this.state;

    if (error) {
      return <h2 className="error">Oops!! There's a problem with the network.</h2>;
    }

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className="App">
        {this.state.users.length === 0 ? <SpaceBar /> : <UserItem user={this.state.users} />}
      </div>
    );
  }
}

export default HomeworkWeek3;
