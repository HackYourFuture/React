import React from 'react'
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'

export default class CommentsList extends React.Component {
  render() {

    const {
      comments,
      handleToggleLike,
      handleCreateComment,
    } = this.props

    return (
      <div className='comments-list'>
        <h2>Comments:</h2>  
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            handleToggleLike={handleToggleLike}
          />
        ))}
        <AddCommentForm
          handleCreateComment={handleCreateComment}  
        />
      </div>
    )
  }
}