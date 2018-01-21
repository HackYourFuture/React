import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './CommentDate';
import CommentText from './CommentText';
import './comment.css';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    // Events and bind to `this`
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(event) {
    const checked = event.target.checked;
    this.props.onReadChange(checked, this.props.comment._id);
  }

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
            <CommentText text={text} />
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
