import React, { Component } from 'react';

class Content extends Component {
  render() {
    const { todoDescription, deadline } = this.props;
    return (
      <div>
        <span><strong>{todoDescription}</strong>{deadline}</span>
      </div>
    );
  }
}

export default Content;