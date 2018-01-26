import React from 'react'

export default class CommentAuthor extends React.Component {

  render() {
    return (
      <div className="CommentAuthor">
        {this.props.author.firstName} said:
      </div>
    )
  }

}