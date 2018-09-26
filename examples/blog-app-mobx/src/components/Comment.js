import React from 'react'

export default class Comment extends React.Component {
  render() {

    const {
      handleToggleLike,
      deleteComment,
      commentEditingID,
      toggleEdit,
      cancelEditing,
      commentEditingText,
      changeCommentEditingText,
      saveComment,
    } = this.props

    const {
      authorName,
      createdAt,
      commentText,
      image,
      isLiked,
      id,
    } = this.props.comment

    console.log(this.props)

    return (
      <div className='comment'>
        <div className='author-info'>
          <img className='profile-photo' src={image} alt={authorName} />
          <div className='author-name'>{authorName}</div>
          <div
            className='delete-icon'
            onClick={() => deleteComment(id)}
          >
            X
          </div>
        </div>
        <div className='comment-body'>
          <div className='comment-info-container'>
            <div className='timestamp'>{createdAt}</div>
            <div
              className='liked-icon'
              onClick={() => handleToggleLike(id)}
            >
              {isLiked ? <span>♥</span> : <span>♡</span>}
            </div>
          </div>
          {commentEditingID === id ?
            <div>
              <textarea
                value={commentEditingText}
                onChange={e => changeCommentEditingText(e)}
              />
              <button onClick={saveComment}>Save comment</button>
              <button onClick={cancelEditing}>Cancel</button>
            </div>
            :
            <div>
              <div className='content'>{commentText}</div>
              <button onClick={() => toggleEdit(id)}>
                Edit comment
              </button>
            </div>
          }
        </div>
      </div>
    )
  }
}