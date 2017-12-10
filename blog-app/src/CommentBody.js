import React from 'react'

export default class CommentBody extends React.Component {

  render() {
    return (
      <div className="CommentBody">
        {this.props.text}
      </div>
    )
  }

}