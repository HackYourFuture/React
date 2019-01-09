import React from 'react';



export default class Description extends React.Component {
  render() {
    return (
      <li>
        <p>{this.props.todo},   {this.props.deadline.toDateString()}</p>
      </li>
    );
  }
}