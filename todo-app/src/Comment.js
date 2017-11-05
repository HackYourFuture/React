import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './CommentDate';
import CommentText from './CommentText';
import './comment.css';

export default class Comment extends React.Component {
  markAsRead = (event) => {
    const checked = event.target.checked;
    this.props.onReadChange(checked, this.props.comment.id);
  };

  render() {
    const { username, imageType, date, text, read } = this.props.comment;

    let commentClasses = 'comment';

    // Conditional rendering
    if (read) {
      commentClasses += ' comment--read';
    }

    return (
      <div className={commentClasses}>
        <div className='comment__user-info'>
          <Picture username={username} imageType={imageType} />
          <div className='comment__meta-info'>
            <Username username={username} />
            <CommentText
              text={text}
              editing={this.props.editing}
              onUpdate={this.props.onCommentTextUpdate}
              onStartEdit={this.props.onStartEditText}
              onStopEdit={this.props.onStopEditText}
            />
          </div>
        </div>
        <CommentDate date={date} />
        <label>
          <input
            type='checkbox'
            checked={read}
            onChange={this.markAsRead}
          />
          {/* Conditional rendering */}
          {read ? 'mark unread' : 'mark read'}
        </label>
      </div>
    );
  }
}
