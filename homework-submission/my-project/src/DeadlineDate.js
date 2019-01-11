import React, { Component } from 'react';

class DeadlineDate extends Component {
  render() {
    return (
      <div>
        <p>{this.props.deadlineDate}</p>
      </div>
    );
  }
}

export default DeadlineDate
