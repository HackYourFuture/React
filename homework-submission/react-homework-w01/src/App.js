import React, { Component } from 'react';
import TodoLists from './listcontainer';

import './App.css';

/* placing everything away from the app.js because I suck at OOP and need more practice. Also the end result looks like a div soup,
but at least these are all reusable right? RIGHT? */

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoLists />
      </div>
    );
  }
}

export default App;
