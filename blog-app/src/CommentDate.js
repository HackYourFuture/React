import React from 'react'

export default class CommentDate extends React.Component {

  render() {
    return (
      <div className="CommentDate">
        at {this.props.date.toLocaleString()}
      </div>
    )
  }

}