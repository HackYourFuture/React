import React from 'react';
import TodoList from './TodoList';
import TodoForm from './todoForm';
import Moment from 'moment';
import initialTodoData from './data/todo-data.json';

//import {observer} from 'mobx-react';


export default class TodoApp extends React.Component {

    state = {
       todos: initialTodoData,

    }
 
    newTodoWithText(text) {
        const ids = this.state.todos.map(todo => todo.id)

        return {
            id: Math.max(...ids) + 1,
            task: text,
            time: Moment().format('YY-MM-DD')
        }
    }

 //done checkbox event handler
    handleDoneToggle = (todoId) => {
        this.setState({
            todos: this.state.todos.map(todo => {
               if (todo.id === todoId) {
             todo.done = !todo.done
              }
             return todo
            })
        })
    }

    handleAddTodoClick = todoText => {
        const todo = this.newTodoWithText(todoText);

        this.setState({
            todos: [todo, ...this.state.todos]
        })
        console.log("adding todo :", todoText);
    };

    render() {
        return(
            <div className="TodoApp">
                
                <h1>TodoList</h1>
                <TodoList todos={this.state.todos}
                handleDoneToggle={this.handleDoneToggle}/>
                <TodoForm onTodoAdd={this.handleAddTodoClick}/>
    
            </div>

        );
    }
}

