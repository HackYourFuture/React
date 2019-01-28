import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Header from './components/Header';
import Post from "./components/Post"
import ToDos from './ToDoList';

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ToDoList: ToDos
      }
      this.checkedTodo = this.checkedTodo.bind(this)
      this.onDelete = this.onDelete.bind(this)
      this.onUpdate = this.onUpdate.bind(this)
   }

   checkedTodo = (index) => {
      const newToDoList = this.state.ToDoList
      newToDoList[index].completed = !newToDoList[index].completed
      this.setState({ newToDoList })
   }

   onDelete = (index) => {
      let newToDoList = this.state.ToDoList
      newToDoList.splice(index, 1)
      this.setState({
         ToDoList: newToDoList
      })
   }

   onUpdate = (newDescription, newDeadline, index) => {
      const newToDoList = this.state.ToDoList
      newToDoList[index].description = newDescription
      newToDoList[index].deadline = newDeadline
   }

   onFormSubmit = (newTodo) => {
      let newToDoList = this.state.ToDoList.push(newTodo);
      this.setState({ ToDo: newToDoList });
   }

   render() {
      const blank = <div className="container">
         <Header />
         <Form onFormSubmit={this.onFormSubmit} />
         <h2>No items...</h2>
      </div>

      let todos = ToDos.map((item, id) => (
         < Post
            index={id}
            key={id}
            item={item}
            checkedTodo={this.checkedTodo}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
         />
      ))

      return (
         this.state.ToDoList.length === 0 ? blank :
            <div className="container">
               <Header />
               <Form onFormSubmit={this.onFormSubmit} />
               {todos}
            </div >
      )
   }
}

export default App;
