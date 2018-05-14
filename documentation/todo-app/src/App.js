
import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import ToDoList from './components/ToDoList';
import todoData from './listTodo.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: todoData,
    }
  }

  handleToggleDone = (todoId) => {
    const attemptTodoList = this.state.items.map((element) => {
      if (element.id === todoId) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    })

    this.setState({ items: attemptTodoList })
  }

  render() {
    const title = 'Todo List of Homework2';
    return (
      <div className="root">
        <div className="App">
          <TopHeader />
          <h1>{title}</h1>
          <section>
            {this.state.items.map((element, indexOfEach) => {
               return  < ToDoList
              key = { indexOfEach }
              todo = { element.description }
              deadline = { element.deadline }
              todoId = { element.id }
              todoStatus = { element.done }
              handleToggleDone = { this.handleToggleDone }
                />
            })
            }
          </section>
        </div>
      </div>
    );
  }
  componentDidMount() {
    
  }
}

export default App;
