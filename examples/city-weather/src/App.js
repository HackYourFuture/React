import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import WeatherResult from './WeatherResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Search submitSearch={search => this.setState({search})} />
        <WeatherResult search={this.state.search} />
      </div>
    );
  }
}

export default App;
