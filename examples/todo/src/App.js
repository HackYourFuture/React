import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content_wrapper">
          <form className="add_todo__form">
            <input placeholder="My new todo text" />
            <button tye="submit">ADD</button>
          </form>
          <div className="to_do__list_wrapper">
            <ul>
              <li>
                <input name="todo" type="checkbox" />
                <label for="todo">This is a test</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
