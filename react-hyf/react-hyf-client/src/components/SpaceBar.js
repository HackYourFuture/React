import React, { Component } from 'react';

class SpaceBar extends Component {
  state = {
    show: true,
  };

  render() {
    return (
      <div>
        <h1 className="spacebar">
          <span> Press Spacebar</span>
        </h1>
      </div>
    );
  }
}

export default SpaceBar;
