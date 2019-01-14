import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <>
        <header >Todo List</header>
        <header style={this.props.styles2}>No items...</header>
      </>
    );
  }
}

export default Header