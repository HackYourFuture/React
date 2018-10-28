import React from 'react';
import CommentDate from './TodoDate';
import CommentText from './TodoText';
import './todo.css';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(event) {
    const checked = event.target.checked;
    this.props.onReadChange(checked, this.props.comment.id);
  }

  render() {
    const {date, text, read } = this.props.comment;
    let todoClasses = 'todo';
    if (read) {
      todoClasses += ' todo--read';
    }
    return (
      <div className={todoClasses}>      
          <div className='todo__info'> 
            <CommentText text={text} />
          </div>
        <CommentDate date={date} />
        <label>
          <input
            type='checkbox'
            checked={read}
            onChange={this.markAsRead}
          />
          {read ? 'mark unread' : 'mark read'}
        </label>
      </div>
    );
  }
}
