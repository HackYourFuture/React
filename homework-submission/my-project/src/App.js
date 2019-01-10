import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Data from './Data';

class App extends Component {
  render() {
    const newData = Data.map(item => <Post key={item.id} description={item.description} deadlineDate={item.deadlineDate} />)
    return (
      <div className="App">
        {newData}
      </div>
    );
  }
}

export default App;
