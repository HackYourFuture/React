import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { description, deadLineDate, isDone} = {
      description: this.props.description,
      deadLineDate: new Date(this.props.deadLineDate).toDateString(),
      _isDone: this.props.isDone, // this is a privte property ust like state
      get isDone() {
        // this get method is for
        // when ever the isDone method has set to true
        // make a css style for it As a done property
        if (this._isDone) {
          return {
            textDecoration: this._isDone && 'line-through',
            color: this._isDone && 'red'
          }
        }
      }
    }
    return (
      <ul>
        <li style={isDone} >{description}, {deadLineDate}</li>
      </ul>
    )
  }
}