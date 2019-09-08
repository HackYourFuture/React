import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h2>
          <i className={this.props.mars} />
        </h2>
      </nav>
    );
  }
}

export default Navbar;
