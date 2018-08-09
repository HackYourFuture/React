import React from 'react';
import ItemDeadLine from './ItemDeadLine.js'

class TodoItem extends React.Component {
  render() {
    return (
      <li className='todoItem'>
        <div>  {this.props.description} <ItemDeadLine deadline={this.props.deadline} /></div>
      </li>
    );
  }
}

export default TodoItem;