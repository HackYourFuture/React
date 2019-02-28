import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <input
          type={this.props.type}
          onChange={this.props.onChange}
          value={this.props.value}
          className={this.props.className}
        />
      </div>
    );
  }
}
