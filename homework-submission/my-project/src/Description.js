import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <p style={this.props.styles}>{this.props.description}{','}</p>
    );
  }
}

export default Description