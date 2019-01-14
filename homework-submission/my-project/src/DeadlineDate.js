import React, { Component } from 'react';

class DeadlineDate extends Component {
  render() {
    return (
      <p style={this.props.styles}>{this.props.deadline}</p>
    );
  }
}

export default DeadlineDate
