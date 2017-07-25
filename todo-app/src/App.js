import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todo from './todo.json';
import TasksForm  from './components/TasksForm';
import AddTodo from './components/AddTodo';
import DeleteAllButton from './components/DeleteAllButton';


class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          description: "Study Math",
          done: false,
          id:1
        },
        {
          description: "Finish your homework",
          done: true,
          id:2
        },
        {
          description: "Eat your sandwich",
          done: true,
          id:3
        },
        {
          description: "Listen to music",
          done: true,
          id:4
        }
      ],
      lastGeneratedId:4
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCompletedTask = this.handleCompletedTask.bind(this)
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
  }

handleSubmit(newDescription,id){
  const index = this.state.todos.findIndex((item) => {
    return item.id === id
  })
  const todo = this.state.todos[index]
  const newTodo = Object.assign({}, todo, {
    description: newDescription
  })
  this.setState({
    todos: this.state.todos.slice(0, index).concat(newTodo, this.state.todos.slice(index + 1))
  })
  console.log(index)
  console.log(newDescription + id)
}

handleDelete(newId){
  console.log(newId)
  const index = this.state.todos.findIndex((item) => {
    return item.id === newId}
  )
  this.setState({
    todos: this.state.todos.slice(0, index).concat(this.state.todos.slice(index + 1))
  })
  console.log(index)
  console.log(this.state.todos)

}

handleCompletedTask(newId){
  console.log(newId)
  const index = this.state.todos.findIndex((item) => {
    return item.id === newId}
  )
  const completed = this.state.todos[index].done ? false : true;
  console.log(completed)
  const todo = this.state.todos[index]
  const newTodo = Object.assign({}, todo, {
    done: completed
  })
  this.setState({
    todos: this.state.todos.slice(0, index).concat(newTodo, this.state.todos.slice(index + 1))
  })
  console.log(this.state.todos)
}

handleNewTaskSubmit(newDescription){
  const newTodo = {
    description:newDescription,
    done: false,
    id: this.state.lastGeneratedId + 1
  }
  this.setState({
    lastGeneratedId: newTodo.id,
    todos: this.state.todos.concat(newTodo)
    })
  console.log(this.state.todos)
}
handleDeleteAll(){
  this.setState({
    lastGeneratedId: 0,
    todos: []
    })
}    
  
  render() {
    console.log(this.state.todos)
    return (
      <div>
        
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to Your Todo App </h2>
        </div>
          <AddTodo handleNewTaskSubmit={this.handleNewTaskSubmit}/>
          <TasksForm 
            todos={this.state.todos}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            handleCompletedTask={this.handleCompletedTask}
          />
          <DeleteAllButton handleDeleteAll={this.handleDeleteAll}/>
        </div>
          
        
      
      
    )
  }
}

export default App;
