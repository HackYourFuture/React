import React from 'react'

export default class HasChildren extends React.Component {

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}