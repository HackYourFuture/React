import React, { Component } from 'react'
import logo from './logo.svg'
import Item from './components/Todo-item'
import './App.css'
import TodoList from './TodosList.json'


const Content = () => {
  if (TodoList.length > 0) {
    return TodoList.map(item => {
      return (
        //x -- item.done
        //x -- item.description
        //x -- item.id
        //x -- item.deadline
        <Item key={item.id} done={item.done} >
          {item.description},
          {item.deadline}
        </Item>
      )
    })
  } else {
    return <p>No items...</p>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is Todo-Item App</h2>
        </header>
        <ul>
          <p>Todo List</p>
          <Content />
        </ul>
      </div>
    )
  }
}

export default App
