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
    if (/^\s*$/.test(this.state.description)) {
      this.props.editHandler(false, this.props.todo.id);
      return;
    }
    this.props.updateHandler(e.target.id, this.state.description);
  }

  render() {
    const todo = this.props.todo;
    const edit = this.props.editing === todo.id;
    const content = edit ? <input type='text' defaultValue={todo.description} onChange={this.changHandler} /> : todo.description;
    return (
      <li className='todoItem'>
        <div>
          <CheckBox todo={todo} checkBoxHandler={this.props.checkBoxHandler} />
          <label className={todo.done ? 'checked' : 'notChecked'}>{content}
            <ItemDeadLine deadline={todo.deadline} />
          </label>
        </div>
        {edit ?
          <React.Fragment>
            <button onClick={this.updateHandler} id={todo.id}>Update</button>
            <button onClick={() => this.props.editHandler(false, todo.id)} >Cancel</button>
          </React.Fragment>
          : <button onClick={() => this.props.editHandler(true, todo.id)} >Edit</button>
        }
        <button onClick={this.props.deleteHandler} id={todo.id}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;