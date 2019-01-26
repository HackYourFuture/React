import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Header from './components/Header';
import Post from "./components/Post"
import ToDoList from './ToDoList';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         ToDoList: ToDoList
      }
      this.checkedTodo = this.checkedTodo.bind(this)
      this.onDelete = this.onDelete.bind(this)
      this.onUpdate = this.onUpdate.bind(this)
   }

   checkedTodo = (index) => {
      const ToDoList = [...this.state.ToDoList]
      ToDoList[index].completed = !ToDoList[index].completed
      this.setState({ ToDoList })
   }

   onDelete = (index) => {
      this.setState({
         ToDoList: ToDoList.splice(index, 1)
      })
   }

   onUpdate = (newDescription, index) => {
      const newToDoList = [...this.state.ToDoList]
      console.log(newToDoList)
      newToDoList[index].description = newDescription;
      this.setState({ ToDoList: newToDoList })
   }

   onFormSubmit = (newTodo) => {
      let newToDoList = this.state.ToDoList
      newToDoList.push(newTodo);
      this.setState({ ToDoList: newToDoList });
   }

   render() {
      const blank = <div className="container">
         <Header />
         <Form onFormSubmit={this.onFormSubmit} />
         <h2>No items...</h2>
      </div>

      let todos = ToDoList.map((item, id) => (
         < Post
            index={id}
            key={id}
            item={item}
            checkedTodo={this.checkedTodo}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
         >
         </Post >
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
