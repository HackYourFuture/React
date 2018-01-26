import React from 'react'

export default class TextField extends React.Component {

  // multiline: boolean
  // value: string
  // onChange: function

  render() {
    if (this.props.multiline) {
      return this.renderMultiLine();
    } else {
      return this.renderSingleLine();
    }
  }

  renderSingleLine() {
    return (
      <input
        type='text'
        className='TextField-singleline'
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

  renderMultiLine() {
    return (
      <textarea
        className='TextField-multiline'
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

}