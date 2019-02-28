import React, { Component } from 'react';

export default class Btn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} type={this.props.type} className={this.props.className}>
        {this.props.name}
      </button>
    );
  }
}
