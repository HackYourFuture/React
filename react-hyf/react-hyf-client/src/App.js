import React, { Component } from 'react';
import UserItem from './components/UserItem';
import axios from 'axios';
import SpaceBar from './components/SpaceBar';
import './App.css';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    document.addEventListener(
      'keydown',
      event => {
        if (event.code === 'Space') {
          axios.get('https://uinames.com/api/?amount=1&ext').then(res =>
            this.setState({
              users: res.data,
            })
          );
        }
      },
      false
    );
  }
  render() {
    return (
      <div className="App">
        <UserItem user={this.state.users} />
        <SpaceBar />
      </div>
    );
  }
}

export default App;
