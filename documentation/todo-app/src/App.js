
import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="App">
          <TopHeader />
          <section>
            <ToDoList />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
