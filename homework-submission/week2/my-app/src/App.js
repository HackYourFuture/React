import React, { Component } from 'react';
import './App.css';

import ToDoItems from './components/ToDoItems';
import Header from './components/Header';

class App extends Component {


   render() {
      return (
         <div className="todo-list">
            <Header />
            <ToDoItems />
         </div>
      );
   }
}

export default App;
