import React from 'react';

export default class Comment extends React.Component {
  render() {

    const { handleToggleLike } = this.props;
    const {
      authorName,
      createdAt,
      commentText,
      image,
      isLiked,
      id,
    } = this.props.comment;

    return (
      <div className='comment'>
        <div className='author-info'>
          <img className='profile-photo' src={image} alt={authorName} />
          <div className='author-name'>{authorName}</div>
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
          <div className='content'>{commentText}</div>
          
        </div>
      </div>
    );
  }
}
