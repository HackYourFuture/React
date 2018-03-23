import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

@inject('InitialStore')
@observer
export default class extends Component {
  render() {
    const { item_state, addNewItem, onInputChange } = this.props.InitialStore
    const { title, deadline } = item_state
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" value={title} onChange={(e) => onInputChange(e, 'title')} required autoFocus />
        <input type="date" value={deadline} onChange={(e) => onInputChange(e, 'deadline')} required />
        <button onClick={addNewItem}>Add Item</button>
      </div>
    )
  }
}