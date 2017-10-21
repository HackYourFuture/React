import React from 'react'
import TodoDescription from './todoDescription'
import TodoState from './todoState'
import './App.css'

class todo extends React.Component { 
  render() {
    return (
      <div>
        <div className='Description'>
          <li><TodoDescription todoDescription={this.props.todoDescription}/></li>
        </div>
        <div className='State'>
          <li><TodoState todoState={this.props.todoState}/></li>
        </div>
      </div>
    )
  }
}
export default todo