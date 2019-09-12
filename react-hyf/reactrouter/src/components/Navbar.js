import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

export class Navbar extends Component {
  state = {
    photo: 'https://i.postimg.cc/dV99xzcW/HYF.jpg',
  };
  render() {
    return (
      <div>
        <li className="navbar bg-primary">
          <img className="hyf" src={this.state.photo} alt="HYF" style={{ width: '30px' }} />
          <h2 className="react">React Module</h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/week1">Week1</Link>
            </li>
            <li>
              <Link to="/week2">Week2</Link>
            </li>
            <li>
              <Link to="/week3">Week3</Link>
            </li>
          </ul>
        </li>
      </div>
    );
  }
}

export default Navbar;
