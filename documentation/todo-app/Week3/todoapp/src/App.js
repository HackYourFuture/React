import React, { Component } from 'react';
import './App.css';
import TodoJsonList from './TodoJsonList';
import InputForm from './components/InputForm';
import ItemsList from './components/ItemsList';

class App extends Component {

  state = {
    TodoJsonList
  }

  addTodo = (event) => {
    event.preventDefault();
    const itemInput = this.itemInput.current.value;
    const deadlineInput = this.deadlineInput.current.value;

    if (!itemInput || !deadlineInput) {
      alert('Please fill up');
    }

    this.setState((prevState) => {
      let lastList = prevState.TodoJsonList;

      lastList.push({
        id: Date.now(),
        description: itemInput,
        deadline: deadlineInput,
        done: false
      });

      return {
        TodoJsonList: lastList
      }

    })

    this.itemInput.current.value = '';
    this.deadlineInput.current.value = '';
  }

  deleteTodo = (index) => {
    this.setState((prevState) => {
      let lastList = prevState.TodoJsonList;

      lastList.splice(index, 1);
      return {
        TodoJsonList: lastList
      }
    })
  }

  checkItem = (todo, index, event) => {
    this.setState((prevState) => {
      let lastList = prevState.TodoJsonList;
      todo.done = !todo.done;

      lastList.splice(index, 1, todo);

      return {
        TodoJsonList: lastList
      }

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sam's updated Week2 React homework</h1>
        </header>
        <p className="App-intro">
          Below is my TodoApp:
        </p>

        <InputForm addItem={this.addTodo} />

        <ItemsList deleteItem={this.deleteTodo} completeItem={this.checkItem} />

      </div>
    );
  }

}

export default App;
