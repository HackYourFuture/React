import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return <ol>{this.props.info}</ol>;
  }
}
