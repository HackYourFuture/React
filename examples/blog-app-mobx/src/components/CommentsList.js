import React from 'react'
import { observer, inject } from 'mobx-react'

import Comment from './Comment'
import AddCommentForm from './AddCommentForm'

@inject('commentsStore')
@observer
export default class CommentsList extends React.Component {
  render() {

    const {
      commentList,
      toggleLike,
      deleteComment,
      commentEditingID,
      toggleEdit,
      cancelEditing,
      commentEditingText,
      changeCommentEditingText,
      saveComment,
    } = this.props.commentsStore

    return (
      <div className='comments-list'>
        <h2>Comments:</h2>  
        {commentList.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            handleToggleLike={toggleLike}
            deleteComment={deleteComment}
            commentEditingID={commentEditingID}
            toggleEdit={toggleEdit}
            cancelEditing={cancelEditing}
            commentEditingText={commentEditingText}
            changeCommentEditingText={changeCommentEditingText}
            saveComment={saveComment}
          />
        ))}
        <AddCommentForm />
      </div>
    )
  }
}