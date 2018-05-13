
import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import ToDoList from './components/ToDoList';
import listTodo from './listTodo.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
      allTodo: [],
    }
  }
  handleToggleDone = (todoId) => {
    const attemptTodoList = this.state.allTodo.map
    ((todoAtom) => {
      if (todoAtom.id === todoId) {
        return {
          ...todoAtom,
          done: !todoAtom.done
        }
      }
      return todoAtom
    })
    this.setState({ allTodo: attemptTodoList })
  }
  
  render() {

    return (
      <div className="root">
        <div className="App">
          <TopHeader />
          <section>
            <ToDoList
              listTodo={listTodo}
              allTodo={this.state.allTodo}
              handleToggleDone={this.handleToggleDone}
              
            />
          </section>
        </div>
      </div>
    );
  }
  // ????
  componentDidMount() {
    this.setState({
      allTodo: ToDoList,
    })
  }
}

export default App;
