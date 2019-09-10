import React, { Component, Fragment } from 'react';

const Photo = ({ photo }) => {
  return <img src={photo}></img>;
};

const Name = ({ name, surname }) => {
  return (
    <h1>
      {name} {surname}
    </h1>
  );
};

const Data = ({ gender, region, phone, birthday, email, password }) => {
  return (
    <ul className="printData">
      <li>👤&nbsp;&nbsp;{gender}</li>
      <li>🌐&nbsp;&nbsp;{region}</li>
      <li>📞&nbsp;&nbsp;{phone}</li>
      <li>🎂&nbsp;&nbsp;{birthday}</li>
      <li>✉️&nbsp;&nbsp;{email}</li>
      <li>🔑&nbsp;&nbsp;{password}</li>
    </ul>
  );
};

class HomeworkWeek3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: false,
      index: 0,
    };
  }

  handleKeyUp = event => {
    if (event.code === 'Space' || event.which === 32) {
      this.setState({ isLoaded: true, index: Math.floor(Math.random() * 10) });
    }
  };

  async componentDidMount() {
    try {
      window.addEventListener('keyup', this.handleKeyUp.bind(this));
      const response = await fetch('https://uinames.com/api/?ext&amount=10');
      const result = await response.json();
      this.setState({ data: result });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const randomPerson = this.state.data[this.state.index] || {};
    const { name, surname, gender, region, phone, birthday, email, password, photo } = randomPerson;
    const isLoaded = this.state.isLoaded;
    return (
      <div className="mainDiv">
        {this.state.error ? (
          <h1>Page is not loading..</h1>
        ) : isLoaded ? (
          <Fragment>
            <Photo photo={photo} />
            <Name name={name} surname={surname} />
            <Data
              gender={gender}
              region={region}
              phone={phone}
              birthday={birthday.dmy || ''}
              email={email}
              password={password}
            />
          </Fragment>
        ) : (
          <h1>Press Spacebar..</h1>
        )}
      </div>
    );
  }
}

export default HomeworkWeek3;
