import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoItem extends React.Component {
  state = {
    edit: false
  }
  toggleHandler = () => {
    this.setState({
      edit: !this.state.edit
    })
  }
  handleUpdate = (e) => {
    e.preventDefault()
    const todo = this.props.todo
    const { updateHandler } = this.props.todos
    let newTask = this.editField.value
    updateHandler(todo._id, newTask)
  }
  render() {
    const todo = this.props.todo;
    const { deleteHandler, checkBoxHandler } = this.props.todos;
    let TodoView;
    if (!this.state.edit) {
      TodoView = (
        <div className="todo">
          <input type='checkbox' defaultChecked={todo.done} onChange={() => checkBoxHandler(todo._id)} />
          <span className={todo.done ? 'checked' : 'notChecked'}>{todo.description}, {todo.deadline}</span>
          <button onClick={this.toggleHandler} > Edit</button>
          <button onClick={() => deleteHandler(todo._id)}>Delete</button>
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
            <button onClick={this.toggleHandler}>Cancel</button>
          </div>
        </form >
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