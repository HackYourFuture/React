import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Post extends Component {
  render() {

    return (
      <div>
        <TodoItem description={this.props.description} deadlineDate={this.props.deadlineDate} />
      </div>
    );
  }
}

export default Post
