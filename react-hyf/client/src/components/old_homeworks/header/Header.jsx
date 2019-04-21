import React, { Component } from 'react';

export class Header extends Component {
  render() {
    const { title } = this.props;
    return <h2>{title}</h2>;
  }
}

export default Header;
