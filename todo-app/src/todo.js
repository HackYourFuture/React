import React, { Component } from 'react';
import TodoDescription from './todoDescription'
import TodoState from './todoState'
import './App.css'

class todo extends Component {
  render() {
    return (
      <div className='todoList'>
        <div className='todoState'>
          <li><TodoState done={this.props.done}/></li>
        </div>
        <div className='Description'>
          <li><TodoDescription todoDescription={this.props.todoDescription} /></li>
        </div>
      </div>
    )
  }
}
export default todo