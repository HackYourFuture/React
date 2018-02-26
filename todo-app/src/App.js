import React, { Component } from 'react';
import TodoList from './component/todoList';
import Header from "./component/header";

class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <TodoList />
         </div>
      );
   }
}

export default App;
