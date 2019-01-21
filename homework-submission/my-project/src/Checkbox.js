import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <input type="checkbox" onChange={() => this.props.changeHandel(this.props.item)} checked={this.props.item.done} />
    );
  }
}

export default Checkbox
