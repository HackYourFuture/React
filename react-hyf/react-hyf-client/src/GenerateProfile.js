import React, { Component } from 'react';

class GenerateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: [],
      randomPerson: {},
      fetchData: false,
    };
    this.url = () => `https://uinames.com/api/?amount=10&ext`;
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
    this.setState({ isLoaded: true, fetchData: true });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = e => {
    if (e.which === 32 || e.code === 'Space') {
      if (this.state.fetchData) {
        this.setState({ fetchData: false }, async () => {
          await this.fetchProfile();
          this.generateRandomPerson();
        });
      } else {
        this.generateRandomPerson();
      }
    }
  };

  generateRandomPerson() {
    const index = Math.round(Math.random() * this.state.people.length);
    this.setState({ randomPerson: this.state.people[index] });
  }

  async fetchProfile() {
    try {
      const people = await fetch(this.url()).then(result => result.json());
      this.setState({
        people,
        isLoaded: true,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { randomPerson, error, isLoaded } = this.state;

    return (
      <div className="contains">
        {error ? (
          <p className="attention">Please try again after one minute!</p>
        ) : (
          isLoaded && (
            <div>
              {Object.keys(randomPerson).length === 0 ? (
                <h1 className="attention">Press Space for Generate Profile</h1>
              ) : (
                <div>
                  <div className="profile">
                    <img src={this.state.randomPerson.photo} alt={this.state.randomPerson.name} />
                  </div>
                  <div className="info">
                    <h2 className="">{this.state.randomPerson.name}</h2>
                    <h2 className="">{this.state.randomPerson.surname}</h2>
                    <h2 className="">{this.state.randomPerson.age}</h2>
                    <h2 className="">{this.state.randomPerson.gender}</h2>
                    <h2 className="">{this.state.randomPerson.email}</h2>
                    <h2 className="">{this.state.randomPerson.region}</h2>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    );
  }
}

export default GenerateProfile;
