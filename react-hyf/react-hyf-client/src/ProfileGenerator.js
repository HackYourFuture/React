import React, { Component, createRef } from 'react';

class ProfileGenerator extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
      randomPerson: '',
      gender: 'random',
    };
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=10&ext')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          people: data,
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.people.length);
    const randPerson = this.state.people[randNum];
    this.setState({ randomPerson: randPerson });
  };

  render() {
    const { error, isLoaded } = this.state;

    return (
      <div>
        {error ? (
          <div className="attention">Error: {error.message}</div>
        ) : (
          isLoaded && <div className="attention">Loading...</div> && (
            <form className="profile-form" onSubmit={this.handleSubmit} onClick={this.handleSubmit}>
              <button>Click me to Generate Profile</button>
              <div className="profile">
                <img src={this.state.randomPerson.photo} alt="" />
              </div>
              <div className="info">
                <h2 className="">{this.state.randomPerson.name}</h2>
                <h2 className="">{this.state.randomPerson.surname}</h2>
                <h2 className="">{this.state.randomPerson.age}</h2>
                <h2 className="">{this.state.randomPerson.gender}</h2>
                <h2 className="">{this.state.randomPerson.email}</h2>
                <h2 className="">{this.state.randomPerson.region}</h2>
              </div>
            </form>
          )
        )}
      </div>
    );
  }
}

export default ProfileGenerator;
