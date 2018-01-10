//jshint esnext: true

import React, { Component } from "react";

export default class InputField extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.handleChange}
        className={this.props.className}
      />
    );
  }
}
