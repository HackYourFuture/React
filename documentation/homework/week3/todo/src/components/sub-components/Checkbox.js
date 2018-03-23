import React, { Component } from 'react'

class Checkbox extends Component {
  render() {
    const { name, handleCheckboxUpdate, id, done } = this.props
    return (
      <input
        onChange={(event) => handleCheckboxUpdate(event, id)}  
        name={name}
        checked={done}
        type="checkbox"
        />
    )
  }
}

export default Checkbox

/*// detecting the value here is 
  // -- useless with the text input so those are
  // -- used for the checkbox only
  // -- why are they useless?!
  // ---- we detected the target method with the 
  // ---- event in any where we are useing them
*/