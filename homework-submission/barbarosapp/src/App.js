import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Item from './staticToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="ToDoItem">
          <Item
            name="Graduation Thesis"
            deadLine="20-10-2018"
            check="Undone" />
        </section>
        <section className="ToDoItem">
          <Item
            name="Payment for Credit Card"
            deadLine="10/10/2018"
            check="Done" />
        </section>
        <section className="ToDoItem">
          <Item
            name="Renovation of House"
            deadLine="01/12/2018"
            check="Undone" />
        </section>
      </div>
    );
  }
}

export default App;
