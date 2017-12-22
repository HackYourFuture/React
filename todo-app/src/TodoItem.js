import React from 'react';
import Description from './Description';
import Deadline from './Deadline';
import './index.css';

export default class TodoItem extends React.Component {

  onDelete = () => this.props.onDelete(this.props.todoItem.id)
  
  render() {
    const {todoItem, onDelete} = this.props;
    return (
      <li className="TodoItem">
          <div className="Item-info">
            <span onClick={() => onDelete(todoItem.id)}>[Delete]</span>
            <Description description={todoItem.description}/>
            <Deadline deadline={todoItem.deadline}/>
          </div>
      </li>
    )
  }
}