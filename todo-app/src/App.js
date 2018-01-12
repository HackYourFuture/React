import React, { Component } from 'react';
import Task from './Task' 
import TaskForm from './TaskForm'
import {loadTodoItems, saveTodoItems} from './storage'


export default class App extends Component {
    state = {
    todos: loadTodoItems(),
    editingTodoID: null
  }

handleEditTodo = id => {
  this.setState({editingTodoID: id});
};

handleCancleEdit = ()=> {
    this.setState({editingTodoID: null});
}


setTodos(todos) {
    this.setState({todos})
    saveTodoItems(todos)
}

handleSaveEdit = (id , description) => {
    this.setTodos(this.state.todos.map(todoItem => {
        if (todoItem.id === id) {
            this.setState({editingTodoID: null});
            return {...todoItem, description};
        }else {
            return todoItem;
        }
    }))
};
toggleStatus = (todoID) =>{
    this.setTodos(this.state.todos.map(todo =>{
                if (todo.id === todoID){
                    todo.done = !todo.done
                }
                return todo
                
            })
      )
    }


 newTaskWithText(text){
     const ids = this.state.todos.map(todo => todo.id)
     return {
         id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
         description: text,
         done: false
     };
 }
 handleTaskAdd = newTodo => {
     const todo = this.newTaskWithText(newTodo);
     this.setTodos([todo, ...this.state.todos]);
 };

handleRemoveTodo = (todoItem) => {
     const updateTodos = this.state.todos;
    updateTodos.splice(updateTodos.indexOf(todoItem), 1)
    this.setState({todos: updateTodos});
    saveTodoItems(updateTodos);
    
}

  render() {
      const{todos} = this.state
    return (
      <div>
        <h1>Todo App</h1>
         <TaskForm 
           ontodoAdd = {this.handleTaskAdd}
          />
		<ul className='tasks'>
         {todos.map((todoItem, i) =>(
        <Task 
        key = {todoItem.id} 
        toggleStatus ={this.toggleStatus} 
        todoItem = {todoItem}
        onRemove = {this.handleRemoveTodo}
        isEditing = {todoItem.id === this.state.editingTodoID}
        onEdit = {this.handleEditTodo}
        onCancleEdit = {this.handleCancleEdit}
        onSaveEdit = {this.handleSaveEdit}
        />
    
    ))}
        
		</ul>
      </div>
    );
  }
      
}