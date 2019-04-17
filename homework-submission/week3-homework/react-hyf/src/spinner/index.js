import React from 'react';
import './style.css';

class Spinner extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    );
  }
}

export default Spinner;
