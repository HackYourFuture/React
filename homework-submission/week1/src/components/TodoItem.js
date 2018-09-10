import React from 'react';
import ItemDeadLine from './ItemDeadLine.js';
import CheckBox from './CheckBox.js';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    const { editing } = this.props.todos;
    const edit = editing === todo._id;
    const content =
      edit ? <input type='text' defaultValue={todo.description} ref={(input) => this.newDescription = input} />
        : todo.description;
    return (
      <li className='todoItem'>
        <div>
          <CheckBox todo={todo} />
          <label className={todo.done ? 'checked' : 'notChecked'}>{content}
            <ItemDeadLine deadline={todo.deadline} />
          </label>
        </div>
        {edit ?
          <React.Fragment>
            <button onClick={() => this.props.todos.updateHandler(todo._id, this.newDescription.value)} id={todo._id}>Update</button>
            <button onClick={this.props.todos.editHandler} >Cancel</button>
          </React.Fragment>
          : <button onClick={() => this.props.todos.editHandler(todo._id)} >Edit</button>
        }
        <button onClick={() => this.props.todos.deleteHandler(todo._id)} id={todo._id}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;