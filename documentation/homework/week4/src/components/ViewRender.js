import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {
      item,
      removeItem,
      toggle_edit,
      toggle_checkbox
    } = this.props

    const { // Item Object
      title,
      deadline,
      id,
      done
    } = item
    return (
      <li>
        <span className={done ? 'done' : ''}>
          <input type='checkbox' checked={done} onChange={() => toggle_checkbox(id)} />
          <span>{title} | </span>
          <span>{deadline}</span>
          <button onClick={() => toggle_edit(id, item)}>Edit Item</button>
          <button onClick={() => removeItem(id)}>Remove Item</button>
        </span>
      </li>
    )
  }
}