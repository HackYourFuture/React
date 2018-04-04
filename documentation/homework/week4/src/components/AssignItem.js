import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

@inject('todo_actions')
@observer
export default class Assign extends Component {
  render() {
    const { item_state, addNewItem, onInputChange } = this.props.todo_actions
    const { description, deadline } = item_state
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" value={description} onChange={(e) => onInputChange(e.target.value, 'description')} autoFocus required />
        <input type="date" value={deadline} onChange={(e) => onInputChange(e.target.value, 'deadline')} required />
        <button onClick={addNewItem}>Add Item</button>
      </div>
    )
  }
}