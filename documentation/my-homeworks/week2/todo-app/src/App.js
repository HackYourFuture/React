import React, { Component } from 'react'
//import TodoList from './components/todo-list'
import Container from './components/Container'


const data = require('./todo.json');


class App extends Component {
  state = {
    todoItems: []
  }


  componentWillMount() {
    localStorage.getItem('todoItems') && this.setState({
      todoItems: JSON.parse(localStorage.getItem('todoItems'))
    })
  }

  componentDidMount() {
    if (!localStorage.getItem('todoItems')) {
      this.setState({
        todoItems: data
      })
    } else {
      console.log('we are using the data from the Local Storage.')
    }

  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todoItems', JSON.stringify(nextState.todoItems))
  }

  handelDoneStatus = (index) => {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    todoItems[index].done = !todoItems[index].done
    this.setState({ todoItems })
  }

  handelNewTask = (newTask) => {

    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    let currentDate = new Date()
    console.log(currentDate.getFullYear().toString())
    todoItems.push({
      "id": this.state.todoItems.length + 1,
      "description": newTask,
      "deadline": `${currentDate.getFullYear().toString()}-${currentDate.getMonth().toString()}-${currentDate.getDay().toString()}`,
      "done": false
    })
    this.setState({ todoItems })
  }

  render() {

    return (

      <div className="App">
        <Container todoItems={this.state.todoItems}
          handelDoneStatus={this.handelDoneStatus} />

      </div>
    );
  }
}

export default App;