import React, { Component } from "react";
import { Provider } from 'mobx-react';
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';
import activities from './components/todos.json';
import stores from './stores';


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Header />
          <TodosList activities={activities} />
        </div>

      </Provider >
    );
  }
}

export default App;