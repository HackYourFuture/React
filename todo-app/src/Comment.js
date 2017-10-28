import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './CommentDate';
import CommentText from './CommentText';
import './comment.css';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      read: props.comment.read
    };

    // Events and bind to `this`
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead() {
    // State updates are asynchronous
    this.setState(prevState => ({
      read: !prevState.read
    }));
  }

  render() {
    const { username, imageType, date, text } = this.props.comment;

    let commentClasses = 'comment';

    // Conditional rendering
    if (this.state.read) {
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
        <button onClick={this.markAsRead}>
          {/* Conditional rendering */}
          {this.state.read ? 'mark unread' : 'mark read'}
        </button>
      </div>
    );
  }
}
