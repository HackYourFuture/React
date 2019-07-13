import React from 'react';

class HomeworkWeek3 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => {
        this.setState({ users });
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

export default HomeworkWeek3;
