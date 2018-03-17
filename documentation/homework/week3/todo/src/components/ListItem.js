import React, { Component } from 'react'

import Checkbox from './sub-components/Checkbox';

class ListItem extends Component {
  render() {
    const { description, deadline, handleRemove, handleCheckboxUpdate, id } = this.props
    // -- 2x paragraphes
    // -- 1x checkbox
    // -- 1x button
    return (
      <div>
        <Checkbox id={id} handleCheckboxUpdate={handleCheckboxUpdate}/>
        <span>{description}</span> <span>{deadline}</span>
        <button onClick={(event) => handleRemove(event, id)}>Remove Item</button>
      </div>
    )
  }
}

export default ListItem