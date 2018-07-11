import React, { Component } from "react";
import { Provider } from 'mobx-react';
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';
import stores from './stores';


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Header />
          <TodosList />
        </div>

      </Provider >
    );
  }
}

export default App;