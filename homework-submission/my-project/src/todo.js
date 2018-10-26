import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
const Todos = ({ todos, deleteTodo, handleClick }) => {
    const todoList = todos.length !== 0 ? (
        todos.map(todo => {
            return (
                <div className="item" key={todo.id}>
                    <button className="pencil"> <input type='checkbox' defaultChecked={todo.done} onChange={() => handleClick(todo.id)} /> <FaPencilAlt /></button>
                    <span>{todo.description}, {todo.deadline}</span>
                    <button className="trash" onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
                </div >
            )
        })
    ) : (
            <p className='noTodo'>All Todos is done...</p>
        )
    return (
        <div>
            {todoList}
        </div>
    )
}
export default Todos 