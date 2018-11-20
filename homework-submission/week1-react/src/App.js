import React, { Component } from 'react';
import todoLogo from './todo.png';
import './App.css';
import Todo from "./component/todo.js";
import Add from "./component/add";
import Update from "./component/update";
import data from './component/todoData.json';

class App extends Component {

  state = {
    data: data,
    indexToUpdate: -1,
    wrongInput : false
  };

  changeDone = (index) => {
    const newData = this.state.data.map(item => {
      if(item.id === index+1) {
        return {...item, done: !item.done}
      }
      return item
    });

    this.setState({
      data: newData,
    });
  }

  addNewTodo = (newEntry) => {
    const dateRegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

    if(newEntry.description === '' || !dateRegExp.test(newEntry.deadline)) {
      this.setState({wrongInput: true})
    } else {

      const newData = this.state.data.map(item => {return {...item}});
      newEntry.id = this.state.data.length;
      newData.push(newEntry)
      this.setState({
        data: newData,
        wrongInput: false
      })
    }
  }

  deleteTodo = (index) => {
    const newData = this.state.data.map(item => {return {...item}});

    newData.splice(index, 1);

    this.setState({
      data: newData,
    })
  }
 
  editButton = (index) => {
    this.setState({
      indexToUpdate: index
    })
  }

  updateTodo = (select, index, newEntry) => {
    if(select === 'cancel') {
      this.setState({
        indexToUpdate: -1
      })
    } else {
      const newData = this.state.data.map(item => {
        if(item.id === index+1) {
          return {...item, description: newEntry.description, deadline: newEntry.deadline}
        }
        return item
      });

      this.setState({
        data: newData,
        indexToUpdate: -1
      })
    }
  }

  render() {
    const isEmpty = this.state.data.length < 1 || this.state.data === undefined;

    const todoList = this.state.data.map((item, key)=> 
    (key === this.state.indexToUpdate) ?
    <Update
    text={item.description}
    date={item.deadline}
    index={key}
    key={key}
    updateTodo={this.updateTodo}
    />
    :
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
    />)

    const elements = (isEmpty) ? <p>No items...</p> : todoList;
      
    return (
      
      <div className="App">
        <header className="App-header">

          <img src={todoLogo} className="todo-logo" alt="todo" />

          <h1>My Todo List</h1>

          <Add
            addNewTodo = {this.addNewTodo}
            wrongInput = {this.state.wrongInput}
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