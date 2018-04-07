import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const {
      item,
      toggle_edit,
      submit_edit,
      onInputEditChange,
      item_edit_state
    } = this.props

    const { // Item Object
      _id,
    } = item
    return (
      <span>
        <input type='text'
          value={item_edit_state.description}
          onChange={(e) => onInputEditChange(e.target.value, 'description')}
          required
          autoFocus />
        <input type='date'
          value={item_edit_state.deadline}
          onChange={(e) => onInputEditChange(e.target.value, 'deadline')}
          required />
        <button onClick={() => submit_edit(_id)}>submit</button>
        <button onClick={() => toggle_edit(_id)}>Cancel</button>
      </span>
    )
  }
}