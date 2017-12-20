//jshint esnext: true

import React from 'react';

import TodoItem from './TodoItem';
import todosData from './todos.json';
import './styles/todoList.css';

const todos = todosData.todos;


export default class TodoList extends React.Component {

    state = {
        todos,
    }

    handleToggleDone = (todoItem) => {
       this.setState({
           todos: this.state.todos.map(item => {
               if (item.id === todoItem.id){
                   item.done = !item.done
               }
               return item;
           })
       })
    }

    renderAllTodos = () => {
        return this.state.todos.map(item => {
            return (
            <React.Fragment key={item.id}>
                <TodoItem 
                data={item}
                handleToggleDone={this.handleToggleDone}
                />
            </React.Fragment>
        )})

    }

    render() {
        return (
            <ul className="todosContainer">
                {this.state.todos.length === 0 ? //is it empty?
                    <h1>No items to show</h1>
                    :
                    this.renderAllTodos()}
            </ul>
        )
    }
}