import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/todoComponents.js'
import TodoForm from './Components/addTodoForm'
import JSONList from './JSONList'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {list: JSONList};
  }

  changeState = (id) => {
    const JSONList = this.state.list.slice();

    JSONList[id].done = !JSONList[id].done;
    this.setState({list: JSONList});
  }
  
  removeTodo = (id) => {
    let JSONList = this.state.list.slice();
    JSONList.splice(id, 1);
    this.setState({list: JSONList});
  
  };

  addTodo = (descrip, deadline) => {
    let JSONList = this.state.list.slice();
    JSONList.push({id:-1, description: descrip, deadline: deadline, done: false});
    this.setState({list: JSONList});
  }

  editTodo = (id, descrip, deadline) => {
    let JSONList = this.state.list.slice();
    JSONList[id].description = descrip;
    JSONList[id].deadline = deadline;
    this.setState({list: JSONList});  
  }

  render() {
    const JSONList = this.state.list;
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo = {this.addTodo}/>
        {JSONList.length === 0 ? <h2>No items...</h2> : JSONList.map((e, index) => <Description 
        description = {e.description} 
        deadline = {e.deadline} 
        key = {index} 
        done = {e.done} 
        id = {index} 
        changeState = {this.changeState}
        removeTodo = {this.removeTodo}
        editTodo = {this.editTodo}
        />
        )}
      </div>
    );
  }
}

export default App;
