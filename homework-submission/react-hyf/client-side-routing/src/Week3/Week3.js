import React, { Component } from 'react';
import emoji from 'react-easy-emoji';
import './styles3.css';

const Photo = ({ photo }) => {
  return <img src={photo} alt="" className="userPhoto" />;
};

const UserName = ({ name, surname }) => {
  return (
    <h1>
      {name} {surname}
    </h1>
  );
};

const UserInfo = ({ gender, region, phone, birthday, email, password }) => {
  return (
    <ul className="details">
      <li>
        {emoji('👤 ')}
        {gender}
      </li>
      <li>
        {emoji('🌐 ')}
        {region}
      </li>
      <li>
        {emoji('☎️ ')}
        {phone}
      </li>
      <li>
        {emoji('🎂 ')}
        {birthday}
      </li>
      <li>
        {emoji('✉️ ')}
        {email}
      </li>
      <li>
        {emoji('🔑 ')}
        {password}
      </li>
    </ul>
  );
};

class Week3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
      index: 0,
    };
  }

  async componentDidMount() {
    try {
      window.addEventListener('keyup', event => {
        if (event.keyCode === 32) {
          this.setState({
            isLoaded: true,
            index: Math.floor(Math.random() * this.state.users.length),
          });
        }
      });
      const response = await fetch('https://uinames.com/api/?ext&amount=10');
      const result = await response.json();
      this.setState({ users: result });
    } catch (error) {
      return <p>Oops! Something went wrong! </p>;
    }
  }

  render() {
    const random = this.state.users[this.state.index] || {};
    const { name, surname, gender, region, phone, birthday, email, password, photo } = random;
    const isLoaded = this.state.isLoaded;
    return (
      <div className="container">
        {this.state.error ? (
          <p>Oops! Something went wrong! </p>
        ) : isLoaded ? (
          <div>
            <Photo photo={photo} />
            <UserName name={name} surname={surname} />
            <UserInfo
              gender={gender}
              region={region}
              phone={phone}
              birthday={birthday.dmy}
              email={email}
              password={password}
            />
          </div>
        ) : (
          <h1>Press Spacebar</h1>
        )}
      </div>
    );
  }
}

export default Week3;
