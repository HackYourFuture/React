import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {
      item,
      toggle_edit,
      submit_edit,
      onInputEdit,
      item_edit_state
    } = this.props

    const { // Item Object
      id,
    } = item
    return (
      <span>
        <input type='text'
          value={item_edit_state.title}
          onChange={(e) => onInputEdit(e, 'title')}
          required
          autoFocus />
        <input type='date'
          value={item_edit_state.deadline}
          onChange={(e) => onInputEdit(e, 'deadline')}
          required />
        <button onClick={() => submit_edit(id)}>submit</button>
        <button onClick={() => toggle_edit(id)}>Cancel</button>
      </span>
    )
  }
}