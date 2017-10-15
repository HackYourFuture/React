import React from 'react';
import Comment from './Comment';
import comments from './comments-from-db';

export default class App extends React.Component {
  renderComments(comments) {
    return comments.map((comment, index) => {
      return (
        <Comment
          key={index}
          comment={comment}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Comments:</h1>

        {this.renderComments(comments)}
      </div>
    );
  }
}
