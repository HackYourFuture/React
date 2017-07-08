import React, { Component } from 'react';
import store from './store';
import {IncreaseButton} from './components'
import './App.css';

class App extends Component {

  state = store.state

  componentDidMount() {
    store.subscribe(this.onStateChange)
  }

  componentWillUnmount() {
    store.unsubscribe()
  }

  onStateChange = newState => {
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <div className="App-state">
          {JSON.stringify(this.state)}
        </div>

        <IncreaseButton/>
      </div>
    );
  }
}

export default App;
