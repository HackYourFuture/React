import React, { Component } from 'react';
import img from '../image/home.png';
export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="home" />
      </div>
    );
  }
}
