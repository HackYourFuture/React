import React from 'react';
import { observer, inject } from 'mobx-react';
import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

@inject('todos')
@observer
class TodoItem extends React.Component {
    render() {
        const todo = this.props.todo;
        const { deleteTodo, checkBoxHandler } = this.props.todos;
        let TodoView = (
            <div className="item">
                <button className="pencil">
                    <input type='checkbox' defaultChecked={todo.done} onChange={() => checkBoxHandler(todo.id)} />
                    <FaPencilAlt /></button>
                <span className={todo.done ? 'done' : 'notdone'}>{todo.description}, {todo.deadline}</span>
                <button onClick={this.handleEditButton}>Edit</button>
                <button className="trash" onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
            </div >
        )
        return (
            <li className='todoItem'>
                {TodoView}
            </li>
        );
    }
}

export default TodoItem;