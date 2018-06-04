import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
 
// ********* Components *********
import TodoList from './components/todoList';
import TopHeader from './components/topHeader';

@inject('todoS')
@observer
  
class App extends Component {

  render() {

    return (
      <div className="App">
        <TopHeader />
        <TodoList
          todoS={this.props.todoS.todoS}
          handleToggleCheck={this.props.todoS.handleToggleCheck}
          handleAddTodo={this.props.todoS.handleAddTodo}
          handleRemoveTodo={this.props.todoS.handleRemoveTodo}
        />
      </div>
    )
  }
}

export default App;
