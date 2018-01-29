import React from 'react'

export default class TextField extends React.Component {

  render() {

    return (
      <div>
        <textArea
          type='text'
          className='TextField'
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>

    )
  }
}