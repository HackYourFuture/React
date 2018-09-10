import React from 'react';
import ItemDeadLine from './ItemDeadLine.js';
import CheckBox from './CheckBox';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    const { editing, deleteHandler, editHandler, updateHandler } = this.props.todos;
    const edit = editing === todo.id;
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
            <button onClick={() => updateHandler(todo.id, this.newDescription.value)} id={todo.id}>Update</button>
            <button onClick={editHandler} >Cancel</button>
          </React.Fragment>
          : <button onClick={() => editHandler(todo.id)} >Edit</button>
        }
        <button onClick={() => deleteHandler(todo.id)} id={todo.id}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;