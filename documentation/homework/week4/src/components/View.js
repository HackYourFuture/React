import React, { Component } from 'react'

export default class View extends Component {
  render() {
    const {
      item,
      removeItem,
      toggle_edit,
      toggle_checkbox
    } = this.props

    const { // Item Object
      description,
      deadline,
      _id,
      done
    } = item
    return (
      <li>
        <span className={done ? 'done' : ''}>
          <input type='checkbox' checked={done} onChange={() => toggle_checkbox(_id)} />
          <span>{description} | </span>
          <span>{deadline}</span>
          <button onClick={() => toggle_edit(_id, item)}>Edit Item</button>
          <button onClick={() => removeItem(_id)}>Remove Item</button>
        </span>
      </li>
    )
  }
}