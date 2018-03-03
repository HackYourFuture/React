import React, { Component } from 'react'

export default class todoItem extends Component {
  render() {
    const { description, deadLineDate, isDone} = {
      description: this.props.description,
      deadLineDate: new Date(this.props.deadLineDate).toDateString(),
      _isDone: this.props.isDone,
      get isDone() {
        console.log(this._isDone)
        if (this._isDone) {
          return {
            textDecoration: this._isDone && 'line-through',
            color: this._isDone && 'red'
          }
        }
      }
    }
    console.log(isDone)
    return (
      <ul>
        <li style={isDone} >{description}, {deadLineDate}</li>
      </ul>
    )
  }
}