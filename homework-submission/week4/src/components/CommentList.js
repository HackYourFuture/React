import React from 'react';
import Comments from './comments'
export default class CommentList extends React.Component {
  render() {
    const comments = this.props.comments;
    const elements = comments.length > 0 ? comments.map(comment =>
      <Comments key={comment._id} id={comment._id} comment={comment}
        onCommentDeleted={this.props.onCommentDeleted}
        updateHandler={this.props.updateHandler}
      />
    )
      : <p> No Comment</p>
    return (
      <div>
        {elements}
      </div>
    )
  }
}