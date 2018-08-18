import React from 'react';
import ItemDeadLine from './ItemDeadLine.js'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

  render() {
    const todo = this.props.todo
    return (
      <li className='todoItem'>
        <div><CheckBox todo={todo} handler={this.props.handler} />
          <label className={todo.done ? 'checked' : 'NotChecked'}> {todo.description}
            <ItemDeadLine deadline={todo.deadline} />
          </label>
        </div>
      </li>
    );
  }
}

export default TodoItem;