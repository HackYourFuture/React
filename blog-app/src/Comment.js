import React from 'react';
import Avatar from './Avatar';
import CommentAuthor from './CommentAuthor';
import CommentDate from './CommentDate';
import CommentBody from './CommentBody';

export default class Comment extends React.Component {

  handleToggleIsLiked = () => {
    this.props.handleToggleIsLiked(this.props.comment.id)
  }

  render() {
    const { comment, handleToggleIsLiked } = this.props;

    return (
      <li className="Comment">
        <div className="Comment-header">
          <div className="Comment-avatar">
            <Avatar author={comment.author}/>
          </div>
          <div className="Comment-info">
            <CommentAuthor author={comment.author}/>
            <CommentDate date={comment.date} />
            <div>
              {comment.isLiked ?
                <span onClick={() => handleToggleIsLiked(comment.id)}>♥</span>
                :
                <span onClick={() => handleToggleIsLiked(comment.id)}>♡</span>
              }
            </div>
          </div>
        </div>
        
        <CommentBody text={comment.text}/>
      </li>
    )
  }

}
