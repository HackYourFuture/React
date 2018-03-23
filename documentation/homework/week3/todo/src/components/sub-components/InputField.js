import React, { Component } from 'react'

class AssignItem extends Component {
  render() {
    const { name } = this.props
    return (
      <input
        name={name}
        type="text"
        placeholder={name}
      />
    )
  }
}

export default AssignItem