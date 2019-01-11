import React, { Component } from 'react';
import DeadlineDate from './DeadlineDate';
import Description from './Description';

class Post extends Component {
  render() {

    return (
      <div className='todo-item'>
        <Description description={this.props.description} />
        <DeadlineDate deadlineDate={this.props.deadlineDate} />
      </div>
    );
  }
}

export default Post