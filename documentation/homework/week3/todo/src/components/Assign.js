import React, { Component } from 'react'

import InputField from './sub-components/InputField'

class AssignItem extends Component {

  render() {
    //x -- 2x inputs
    //x -- 1x button
    return (
      <form onSubmit={(event) => this.props.handleAssign(event)}>
        <InputField name="description" />
        <InputField name="deadline" />
        <input type="submit" value="Add Item" />
      </form>
    )
  }
}

export default AssignItem