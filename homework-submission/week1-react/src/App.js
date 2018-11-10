import React, { Component } from 'react';
import todoLogo from './todo.png';
import './App.css';
import Todo from "./todo.js";
import Add from "./add.js";
import Update from "./update.js";
import data from './todoData.json';

class App extends Component {

  state = {
    data: data,
    indexToUpdate: -1
  };

  changeDone = (index) => {
    const newData = this.state.data;
    if(this.state.data[index].done) {
      newData[index].done = false  
    } else {
      newData[index].done = true
    }
    this.setState({
      data: newData,
      indexToUpdate: -1
    });
    console.log(newData[index])
  }

  addNewTodo = (newEntry) => {
    const newData = this.state.data;
    newEntry.id = this.state.data.length;
    newData.push(newEntry)
    this.setState({
      data: newData,
      indexToUpdate: -1
    })
  }

  deleteTodo = (index) => {
    const newData = this.state.data;
    newData.splice(index, 1);
    this.setState({
      data: newData,
      indexToUpdate: -1
    })
  }
 
  editButton = (index) => {
    this.setState({
      data: data,
      indexToUpdate: index
    })
  }

  updateTodo = (select, index, newEntry) => {
    if(select === 'cancel') {
      this.setState({
        data: data,
        indexToUpdate: -1
      })
    } else {
      const newData = this.state.data;
      newData[index].description = newEntry.description;
      newData[index].deadline = newEntry.deadline;
      this.setState({
        data: newData,
        indexToUpdate: -1
      })
    }
  }

  render() {
    const elements = (this.state.data.length < 1 || this.state.data === undefined) 
      ? 
      <p>No items...</p>
      : 
      this.state.data.map((item, key)=> 
      (key !== this.state.indexToUpdate) ?
      <Todo
      key={key}
      index={key}
      changeDone = {this.changeDone}
      deleteTodo = {this.deleteTodo}
      editButton={this.editButton}
      id={item.id}
      text={item.description}
      date={item.deadline}
      done={item.done}
      /> 
      : 
      <Update
      text={item.description}
      date={item.deadline}
      index={key}
      key={key}
      updateTodo={this.updateTodo}
      />)

    return (
      
      <div className="App">
        <header className="App-header">

          <img src={todoLogo} className="todo-logo" alt="todo" />

          <h1>My Todo List</h1>

          <Add
            addNewTodo = {this.addNewTodo}
          />

          <ul>
            {elements}
          </ul>

        </header>
      </div>
    );
  }
}

export default App;
