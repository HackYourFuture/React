import React, { Component } from 'react';

export default class TodoDescriptionRow extends Component {
  render() {
    const description = this.props.description;
    return (
      <tr>
        <th>Description:</th>
        <td>{description}</td>
      </tr>
    );
  }
}
