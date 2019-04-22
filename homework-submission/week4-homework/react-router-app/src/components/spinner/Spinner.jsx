import React from 'react';
import './style.css';

class Spinner extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader" />
      </div>
    );
  }
}

export default Spinner;
