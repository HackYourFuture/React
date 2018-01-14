//jshint esnext: true

import React, { Component } from "react";

export default class InputField extends Component {
  handleChange = event => {
    this.props.handleChange(event.target.value);
  };

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.handleChange}
        className={this.props.className}
      />
    );
  }
}
