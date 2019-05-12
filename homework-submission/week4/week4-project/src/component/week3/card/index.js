import React, { Component } from 'react';
import './style.css';

import Avatar from './avatar';
import Info from './info';
import Title from './title';

class Card extends Component {
  render() {
    const data = this.props.data;

    return (
      <div id="card-wrapper">
        {
          data.map(item => {
            return (
              <div id="card" key={item.name}>
                <Avatar />
                <Title name={item.name} surname={item.surname} />
                <Info data={item} />
              </div>
            );
          })[Math.floor(Math.random() * data.length)]
        }
      </div>
    );
  }
}

export default Card;
