import React, { Component } from 'react'
import TodoItems from './todoItems'
import AddTodoItem from './addTodoItem'
import RemoveTodo from './removeTodoItem'
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
                </tr>
                
                {todoS.map(todo => (
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
                <RemoveTodo 
                    handleRemoveTodo={handleRemoveTodo}
                />    
            </div>
        )
    }
}

export default TodoList;
