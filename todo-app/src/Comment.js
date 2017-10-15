import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './Date';
import CommentText from './CommentText';
import './comment.css';

export default class Comment extends React.Component {
  render() {
    const { username, imageType, date, text } = this.props.comment;

    return (
      <div className='comment'>
        <div className='comment--user-info'>
          <Picture username={username} imageType={imageType} />
          <div className='comment--meta-info'>
            <Username username={username} />
            <CommentDate date={date} />
          </div>
        </div>
        <CommentText text={text} />
      </div>
    );
  }
}
