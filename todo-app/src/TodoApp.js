import React from 'react';
import TodoList from './TodoList';
import TodoForm from './todoForm';
import Moment from 'moment';
//import initialTodoData from './data/todo-data.json';
import { loadTodos, saveTodos} from './storage';

export default class TodoApp extends React.Component {

    state = {
       //todos: initialTodoData,
       todos: loadTodos()
    };
 
    setTodos(todos) {
        this.setState({todos});
        saveTodos(todos);
    };

    newTodoWithText(text) {
        const ids = this.state.todos.map(todo => todo.id)

        return {
            // id: Math.max(...ids) + 1, solving todos with same id 
            id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
            task: text,
            time: Moment().format('YY-MM-DD'),
            done: false,
        }
    };

    handleDoneToggle = (todoId) => {
        this.setState({
            todos: this.state.todos.map(todo => {
               if (todo.id === todoId) {
             todo.done = !todo.done
              }
             return todo
            })
        });
    };

    handleAddTodoClick = todoText => {
        const todo = this.newTodoWithText(todoText);
        //should change to setTodos
        this.setState({
            todos: [todo, ...this.state.todos]
        })
        console.log("adding todo :", todoText);
    };

    handleSaveTodo = (id, task) => {
        //text changed to task 
        this.setTodos(this.state.todos.map(todo => {
            if (todo.id === id) {
              return {...todo, task};
            } else {
              return todo
            }
      }));
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
                   />
                   <TodoForm onTodoAdd={this.handleAddTodoClick}
                   />
                </div>
            </div>
        )
    };
};

