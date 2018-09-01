import React from 'react';
import ItemDeadLine from './ItemDeadLine.js'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

  state = {
    description: ''
  }

  changHandler = (e) => {
    this.setState({ description: e.target.value })
  }

  updateHandler = (e) => {
    if (this.state.description.length === 0 || /^\s*$/.test(this.state.description)) {
      this.props.editHandler(false, this.props.todo.id);
      return;
    }
    this.props.updateHandler(e.target.id, this.state.description);
  }

  render() {
    const todo = this.props.todo;
    const edit = this.props.editing == todo.id;
    let content = edit ? <input type='text' defaultValue={todo.description} onChange={this.changHandler} /> : todo.description;
    return (
      <li className='todoItem'>
        <div>
          <CheckBox todo={todo} checkBoxHandler={this.props.checkBoxHandler} />
          <label className={todo.done ? 'checked' : 'notChecked'}>{content}
            <ItemDeadLine deadline={todo.deadline} />
          </label>
        </div>
        {!edit && <button onClick={() => this.props.editHandler(true, todo.id)} >Edit</button>}
        {edit && <button onClick={this.updateHandler} id={todo.id}>Update</button>}
        {edit && <button onClick={() => this.props.editHandler(false, todo.id)} >Cancel</button>}
        <button onClick={this.props.deleteHandler} id={todo.id}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;