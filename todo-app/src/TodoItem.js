import React from 'react';
import Description from './Description';
import Deadline from './Deadline';
import './index.css';

export default class TodoItem extends React.Component {

  onDelete = () => this.props.onDelete(this.props.todoItem.id)

  onDone = () =>  this.props.onDone(this.props.todoItem.id)
  
  
  render() {
    const {todoItem, onDelete, onDone} = this.props;
    return (
      <li className="TodoItem">
          <div className="Item-info">
            <span >{todoItem.done ?
                <span className="done-button" onClick={() => onDone(todoItem.id)}>[X]</span>
                :
                <span className="undone-button" onClick={() => onDone(todoItem.id)}>[_]</span>
              }</span>
            <Description description={todoItem.description}/>
            <Deadline deadline={todoItem.deadline}/>
            <span className="delete-button" onClick={() => onDelete(todoItem.id)}>[Delete this item]</span>
          </div>
      </li>
    )
  }
}