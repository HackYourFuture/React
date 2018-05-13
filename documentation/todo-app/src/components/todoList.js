import React, { Component } from 'react'
import TodoItems from './todoItems'
import AddTodoItem from './addTodoItem'
import './todoList.css'

class TodoList extends Component {

    render() {
        const {
            todoS,
            handleToggleCheck,
            handleAddTodo,
            handleRemoveTodo
        } = this.props

        return (
            <div className='todoList'>
                <tr>
                    <th>Task</th>
                    <th>Deadline Date</th>
                    <th>Created Date</th>
                    <th>Done!</th>
                    <th>Remove</th>
                    
                </tr>
                {todoS.length === 0 ? <p>yeeyyy!! there is no task anymore :) </p> :
                todoS.map(todo => (
                    <TodoItems
                        key={todo.id}
                        todo={todo}
                        handleToggleCheck={handleToggleCheck}
                        handleRemoveTodo={handleRemoveTodo}
                    />
                ))
                }

                <AddTodoItem
                    handleAddTodo={handleAddTodo}
                />

            </div>
        )
    }
}

export default TodoList;
