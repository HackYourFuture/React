import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Container from './Components/Container'


import './App.css';
const data = require('./todoList.json');

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

  handelSelected = (index) => {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    todoItems[index].selected = !todoItems[index].selected
    this.setState({ todoItems })
  }

  handelNewTask = (newTask, newDeadLine) => {

    const todoItems = this.state.todoItems
    todoItems.push({
      "id": this.state.todoItems.length + 1,
      "description": newTask,
      "deadline": newDeadLine,
      "selected": false
    })
    this.setState({ todoItems })
  }

  handelUpdateTask = (index , update) => {
    const todoItems = this.state.todoItems
    todoItems[index].description = update
    this.setState({todoItems})
  }

  handelDeleteTask = (id, selected) => {
    let todoItems
    if (selected) {
      todoItems = this.state.todoItems.filter(task => task.id !== id)
      todoItems.map((item,index) => {
        item.id = index + 1
      })
      this.setState({ todoItems })
    } else {
      console.log('Not selected yet')
    }
   
  }

  render() {

    return (

      <div className="App">
        <div className="Header"><Header /></div>
        <div><Container todoItems={this.state.todoItems}
          handelSelected={this.handelSelected}
          handelDeleteTask={this.handelDeleteTask}
          handelUpdateTask={this.handelUpdateTask}
          handelNewTask={this.handelNewTask}/>
        </div>
        <div className="Footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
