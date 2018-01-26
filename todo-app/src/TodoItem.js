import React from 'react';
import { observer, inject } from "mobx-react";
import Description from './Description';
import Deadline from './Deadline';
import './index.css';

@inject("todoStore")
@observer
export default class TodoItem extends React.Component {

  //onDelete = () => this.props.onDelete(this.props.todoItem.id)
  //onDone = () =>  this.props.onDone(this.props.todoItem.id)
  
  render() {
    const {todoItem, deleteTodo, changeStatus} = this.props;
    return (
      <li className="TodoItem">
          <div className="Item-info">
            <span >{todoItem.done ?
                <span className="done-button" onClick={() => changeStatus(todoItem._id)}>[X]</span>
                //<span className="done-button" onClick={onDone}>[X]</span>
                :
                <span className="undone-button" onClick={() => changeStatus(todoItem._id)}>[_]</span>
                //<span className="undone-button" onClick={onDone}>[_]</span>
              }</span>
            <Description description={todoItem.description}/>
            <Deadline deadline={todoItem.deadline}/>
            <button className="delete-button" onClick={() => deleteTodo(todoItem._id)}>Delete </button>
          </div>
      </li>
    )
  }
} 