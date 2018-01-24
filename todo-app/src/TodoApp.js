import React from 'react';
import TodoList from './TodoList';
import TodoForm from './todoForm';
import Moment from 'moment';
import {loadTodos, saveTodos} from './storage';

export default class TodoApp extends React.Component {

    state = {
       todos: loadTodos(),
    };
 
    setTodos(todos) {
        this.setState({todos});
        saveTodos(todos);
    };

    handleDoneToggle = (todoId) => {
        let newArray = this.state.todos.map(todo => {
            if (todo.id === todoId) {
          todo.done = !todo.done
           }
          return todo
         })

        this.setTodos(newArray);
    };

    newTodoWithText(text, deadline) {
        const ids = this.state.todos.map(todo => todo.id)

        return {
            // id: Math.max(...ids) + 1, solving todos with same id 
            id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
            task: text,
            addedTime: Moment().format('YY-MM-DD'),
            deadlineTime: deadline,
            done: false,
        }
    };
    
    handleAddTodoClick = (todoText, deadline) => {

        const todo = this.newTodoWithText(todoText, deadline);
        this.setTodos([todo, ...this.state.todos]);
        console.log("Adding todo :", todoText, "deadline is ", deadline);
    };

    //saves text after editing

    handleSaveTodo = (id, task) => {

        this.setTodos(this.state.todos.map(todo => {
            if (todo.id === id) {
              return {...todo, task};
            } else {
              return todo
            }
      }));
    };

    //saves deadline after editing
    //both handleSave and handleSaveDeadline are not working at  
    //sametime thats why i've used setTimeOut until updating to mobx
    
    handleSaveDeadline = (id, deadlineTime) => {

        setTimeout( ()=> {
            this.setTodos(this.state.todos.map(todo => {
                if (todo.id === id) {
                  return {...todo, deadlineTime};
                } else {
                  return todo
                }
          }));

        }, 10)
       
    };
    
    handleTodoRemove = (id) => {
        let filteredTodos =  this.state.todos.filter(todo => todo.id !== id)
        this.setTodos(filteredTodos);
    };

    render() {
        return(
            <div className="TodoApp">
                <div className="Header">
                  <h1 className="Title">TodoList</h1>
                </div>
                <div className="TodoList">
                   <TodoList todos={this.state.todos}
                   handleDoneToggle={this.handleDoneToggle}
                   handleRemove={this.handleRemove}
                   handleEditTodo={this.handleEditTodo}
                   onSaveTodo={this.handleSaveTodo}
                   onSaveDeadline={this.handleSaveDeadline}
                   handleTodoRemove={this.handleTodoRemove}
                   />
                   <TodoForm onTodoAdd={this.handleAddTodoClick}
                   />
                </div>
            </div>
        );
    };
};

