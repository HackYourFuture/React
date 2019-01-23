import React from 'react';

export default class Description extends React.Component {

  render() {
    return (

      <p>{this.props.todo}, {this.props.deadline}</p>

    );
  }
}