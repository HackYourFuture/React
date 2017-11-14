import React from 'react';
import './commentDate.css';

export default class CommentDate extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      date: new Date(props.date)
    };
  }

  render() {
    return (
      <div className='comment__date'>{this.state.date.toDateString()}</div>
    );
  }
}
