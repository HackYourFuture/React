import React from 'react';
import CommentDate from './TodoDate';
import CommentText from './TodoText';
import './todo.css';
export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    // Events and bind to `this`
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(event) {
    const checked = event.target.checked;
    this.props.onReadChange(checked, this.props.comment.id);
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
          
          <div className='comment__meta-info'>
            
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
