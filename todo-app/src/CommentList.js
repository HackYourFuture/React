import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    // Conditional rendering
    if (this.props.comments.length === 0) {
      return <div>Loading...</div>;
    }

    // List and keys
    const comments = this.props.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          editing={this.props.editingCommentId === comment.id}
          onStartEditText={this.props.onStartEditCommentText.bind(this, comment.id)}
          onStopEditText={this.props.onStopEditCommentText}
          onRemove={this.props.onCommentRemove.bind(this, comment.id)}
          updateComment={this.props.onCommentUpdate}
        />
      );
    });

    return (
      <div>{comments}</div>
    );
  }
}
