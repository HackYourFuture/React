import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        className={this.props.className}
        key={this.props.key}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
