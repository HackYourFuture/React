import React from 'react';
import Comment from './Comment';
import initialCommentData from './comments.json'

export default class CommentList extends React.Component {

  state = {
    comments: initialCommentData.map(comment => {
      return Object.assign({}, comment, {
        isLiked: false,
      })
    }),
  }

  handleToggleIsLiked = (commentID) => {
    this.setState({
      comments: this.state.comments.map(comment => {
        if (comment.id === commentID) {
          comment.isLiked = !comment.isLiked
        }
        return comment
      })
    })
  }

  render() {
    return (
      <div className="CommentList">
        {this.renderList()}
      </div>
    )
  }

  renderList() {

    const { comments } = this.state

    return (
      <ul>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            {index > 0 && <li className="CommentList-separator"/>}
            <Comment handleToggleIsLiked={this.handleToggleIsLiked} comment={comment} />
          </React.Fragment>
        ))}
      </ul>
    )
  }

}