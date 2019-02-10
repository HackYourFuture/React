import React, { Component } from 'react';
import './App.css';
import Employees from './components/Employees';

class App extends Component {
  state = {
    mode: 'HOME'
  }

  getEmployee = () => {
    this.setState({ mode: 'EMPLOYEE' });
  }
  getHome = () => {
    this.setState({ mode: 'HOME' })
  }

  render() {
    return (
      <div id='root'>
        <div className='App'>
          <nav>
            <ul>
              <li onClick={this.getHome}>HOME</li>
              <li onClick={this.getEmployee}>EMPLOYEES</li>
            </ul>
          </nav>
          {(this.state.mode === 'HOME') ?
            <div className='home'>
              <h1>Welcome to test!</h1>
              <img src='https://hackyourfuture.dk/static/hackyourfuture-logo-white.png'></img>
            </div> :
            <Employees></Employees>
          }

        </div>
      </div >
    );
  }
}

export default App;
