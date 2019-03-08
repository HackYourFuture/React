import React, { Component } from 'react';
import TodoDescriptionRow from './TodoDescriptionRow';
import TodoDeadlineRow from './TodoDeadlineRow';

export default class TodoTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <TodoDescriptionRow description={this.props.description} />
          <TodoDeadlineRow deadline={this.props.deadline} />
        </tbody>
      </table>
    );
  }
}
