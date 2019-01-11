import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Data from './Data';
import Header from './Header';


class App extends Component {
  render() {
    const newData = Data.map(item => <Post key={key} description={item.description} deadlineDate={item.deadlineDate} />)
    return (
      <div className="App">
        <Header />
        {newData}
      </div>
    );
  }
}

export default App;
