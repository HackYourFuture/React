import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './CommentDate';
import CommentText from './CommentText';
import './comment.css';
import {observer} from 'mobx-react';

class Comment extends React.Component {
  markAsRead = (event) => {
    this.props.updateComment(this.props.comment.id, {read: event.target.checked});
  };

  onCommentTextUpdate = (text) => {
    this.props.updateComment(this.props.comment.id, {text});
    this.props.onStopEditText();
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
              onUpdate={this.onCommentTextUpdate}
              onStartEdit={this.props.onStartEditText}
              onStopEdit={this.props.onStopEditText}
            />
          </div>
          <div>
            <button onClick={this.props.onRemove}>x</button>
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

export default observer(Comment);
