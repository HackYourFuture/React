import React from 'react';

import './App.css';
import './PreviousHomeworks.css';
import './components/PreviousHomeworks';
import PreviousHomeworks from './components/PreviousHomeworks';

import Homework3 from './components/Homework3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};

    this.state = {
      person: {
        name: 'Press',
        surname: 'Spacebar',
        gender: '',
        region: '',
        phone: '',
        birthday: '',
        email: '',
        password: '',
        photo: '',
      },
    };
    this.fillData = this.fillData.bind(this);
  }

  getRandomArbitrary() {
    return Math.floor(Math.random() * 10);
  }

  async componentDidMount() {
    window.addEventListener('keyup', this.fillData);
    const response = await fetch('https://uinames.com/api/?amount=10&ext');
    this.data = await response.json();
  }
  fillData(event) {
    const list = document.getElementsByClassName('listHomework3')[0];
    list.style.display = 'block';
    if (event.keyCode === 32) {
      this.setState({ person: this.data[this.getRandomArbitrary()] });
    }
  }

  render() {
    return (
      <div className="App">
        <PreviousHomeworks></PreviousHomeworks>
        <Homework3 person={this.state.person}></Homework3>
      </div>
    );
  }
}

export default App;
