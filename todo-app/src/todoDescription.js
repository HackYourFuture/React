import React, { Component } from 'react';

class todoDescription extends Component {
  render() {
    return (
      <div>
        {this.props.todoDescription}
      </div>
    )
  }
}

export default todoDescription