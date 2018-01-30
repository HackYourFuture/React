import React from 'react';
import { observer, inject } from "mobx-react";
import Description from './Description';
import Deadline from './Deadline';
import './index.css';

@inject("todoStore")
@observer
export default class TodoItem extends React.Component {

  //deleteTodo = () => this.props.deleteTodo(this.props.todoItem.id)
  //todoStatus = () =>  this.props.todoStatus(this.props.todoItem.id)
  
  render() {
    const {todoItem, deleteTodo, changeStatus} = this.props;
    return (
      <li className="TodoItem">
          <div className="Item-info">
            <span >{todoItem.done ?
                <span className="done-button" onClick={() => changeStatus(todoItem._id)}>[X]</span>
                //<span className="done-button" onClick={todoStatus}>[X]</span>
                :
                <span className="undone-button" onClick={() => changeStatus(todoItem._id)}>[_]</span>
                //<span className="undone-button" onClick={todoStatus}>[_]</span>
              }</span>
            <Description description={todoItem.description}/>
            <Deadline deadline={todoItem.deadline}/>
            <button className="delete-button" onClick={() => deleteTodo(todoItem._id)}>Delete </button>
          </div>
      </li>
    )
  }
} 