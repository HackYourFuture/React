import React from 'react';
import '../App.css';
export class Homeworkweek3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  fetchUsers = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://reqres.in/api/users?page=2`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          users: res.data,
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1 id="user"> Users</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { first_name, last_name, email, avatar } = user;
            return (
              <div key={email}>
                <p>Name: {first_name}</p>
                <p>surname:{last_name}</p>
                <p>email: {email}</p>
                <img alt="avatar" src={avatar} />
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
