import React, { Component } from 'react';

class todoDescription extends Component {
  render() {
    return (
      <div>
        {this.props.description}
      </div>
    )
  }
}

export default todoDescription