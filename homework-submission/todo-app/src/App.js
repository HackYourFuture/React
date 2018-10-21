import React, { Component } from 'react';
import './App.css';
import Todos from './todos/todos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
