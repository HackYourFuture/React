import React, { Component } from 'react';

export default class TodoDeadlineRow extends Component {
  render() {
    const deadline = this.props.deadline;
    return (
      <tr>
        <th>Deadline:</th>
        <td>{deadline}</td>
      </tr>
    );
  }
}
