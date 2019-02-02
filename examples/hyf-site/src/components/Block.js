import React, { Component } from 'react';

class Block extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div className="block">
        <h2 className="block__title">{ title }</h2>
        <div className="block__body">{ body }</div>
      </div>
    );
  }
}

export default Block;
