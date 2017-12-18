import React from 'react';

import TodoItem from './todo-item';
import todosData from './todos.json';

const todos = todosData.todos;


export default class TodoList extends React.Component {

    state = {
        todos,
    }

    handleIsItDone = (todoItem) => {
       this.setState({
           todos: this.state.todos.map(item => {
               if (item.id === todoItem.id){
                   item.done = !item.done
               }
               return item;
           })
       })
    }


    render() {
        return (
            <ul className="todos-container">
                {this.state.todos.length === 0 ? //is it empty?
                    <h1>No items to show</h1>
                    :
                    this.renderAllTodos()}
            </ul>
        )
    }
    
    renderAllTodos = () => {
        return this.state.todos.map(item => {
            return (
            <React.Fragment key={item.id}>
                <TodoItem 
                data={item}
                handleIsItDone={this.handleIsItDone}
                />
            </React.Fragment>
        )})

    }




}