import React, { Component } from 'react';

class Week3 extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: false,
    };
  }

  componentDidMount() {
    const apiURL = '/';
    fetch(apiURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  RenderName = () => {
    return (
      <React.Fragment>
        <h1>Names</h1>
        {this.state.users ? (
          this.state.users.map(user => (
            <div key={user.id}>
              {user.name}
              <br />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  };

  RenderUsername = () => {
    return (
      <React.Fragment>
        <h1>Usernames</h1>
        {this.state.users ? (
          this.state.users.map(user => (
            <div key={user.id}>
              {user.username}
              <br />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <this.RenderName />
        <this.RenderUsername />
      </React.Fragment>
    );
  }
}

export default Week3;
