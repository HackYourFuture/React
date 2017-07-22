import React from 'react';
import './App.css';

 export default class Todo extends React.Component {

render() {

    return (
      <div className='todo-items'>
        <span className='item-name'>{this.props.description} ... {this.props.done} ... </span>
        <button type="button" onClick={()=>{this.props.onDelete(this.props.index)}} >Delete</button>
      </div>
    );
  }
}