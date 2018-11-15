import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoItem extends React.Component {
  handleUpdate = (e) => {
    e.preventDefault()
    const todo = this.props.todo
    const { updateHandler, editHandler } = this.props.todos
    let oldTask = todo.description
    let newTask = this.editField.value
    let newDate = this.secondEditField.value
    updateHandler(oldTask, newTask, newDate)
    editHandler(todo.id)
  }
  render() {
    const todo = this.props.todo;
    const { deleteHandler, editHandler, checkBoxHandler } = this.props.todos;
    let TodoView;
    if (!todo.edit) {
      TodoView = (
        <div className="todo">
          <input type='checkbox' id='description' defaultChecked={todo.done} onChange={() => checkBoxHandler(todo.id)} />
          <span className={todo.done ? 'checked' : 'notChecked'}>{todo.description}, {todo.deadline}</span>
          <button onClick={() => editHandler(todo.id)}>Edit</button>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        </div >
      )
    } else {
      TodoView = (
        <form>
          <div className="todo editMode">
            <input type='checkbox' defaultChecked={todo.done} />
            <input type='text' defaultValue={todo.description} ref={(chEl) => (this.editField = chEl)} />
            <input type='text' defaultValue={todo.deadline} ref={(dateEl => (this.secondEditField = dateEl))} />
            <button onClick={this.handleUpdate}>Update</button>
            <button onClick={() => editHandler(todo.id)}>Cancel</button>
          </div>
        </form>
      )

    }
    return (
      <li className='todoItem'>
        {TodoView}
      </li>
    );
  }
}

export default TodoItem;