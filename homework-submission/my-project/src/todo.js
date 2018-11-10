
import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

class TodoList extends React.Component {
    state = {
        editing: false
    }
    render() {
        const TodoItem = (
            <span className={this.props.done ? 'done' : 'notdone'}>
                <div className="item" key={this.props.sort}>
                    <li>
                        <button className="pencil">
                            <input type='checkbox' defaultChecked={this.props.done} onChange={() => this.props.handleClick(this.props.sort)} />
                            <FaPencilAlt /></button>
                        {this.props.description}</li><li className="deadline">{this.props.deadline}</li>
                    <button onClick={this.handleEditButton}>Edit</button>
                    <button className="trash" onClick={() => this.props.deleteTodo(this.props.sort)}><FaTrash /></button>
                </div >
            </span>

        )


        return <div>
            {TodoItem}
        </div>
    }
}
export default TodoList 