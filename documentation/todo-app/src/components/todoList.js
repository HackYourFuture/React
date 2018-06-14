import React, { Component } from 'react'
import TodoItems from './todoItems'
import AddTodoItem from './addTodoItem'
import './todoList.css'
import { inject, observer } from 'mobx-react'

@inject('todoS')
@observer

    
class TodoList extends Component {

    render() {
        const {
            handleToggleCheck,
            handleAddTodo,
            handleRemoveTodo
        } = this.props.todoS

        const todoS = this.props.todoS        

        const todoItems = todoS.length === 0 ? <p>yeeyyy!! there is no task anymore :) </p> :
            todoS.map(todo => (
                <TodoItems
                    key={todo._id}
                    todo={todo}
                    handleToggleCheck={handleToggleCheck}
                    handleRemoveTodo={handleRemoveTodo}
                />
            ));
            
        return (
            <div className='todoList'>
                <tr>
                    <th>Task</th>
                    <th>Deadline Date</th>
                    <th>Created Date</th>
                    <th>Done!</th>
                    <th>Remove</th>
                </tr>
                {todoItems}
                <AddTodoItem
                    handleAddTodo={handleAddTodo}
                />
            </div>
        )
    }
}

export default TodoList;
