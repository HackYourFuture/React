import React, { Component } from 'react';
import './Style.css';

class List extends Component {
  render() {
    const description = this.props.description;
    const deadline = this.props.deadline;

    return (
      <div>
        <ul className="list">
          <li>{description}</li>
          <li>{deadline}</li>
        </ul>
      </div>
    );
  }
}

class StaticList extends Component {
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <List description="Get out of bed" deadline="Wed Sep 13 2017" />
        <List description="Brush teeth" deadline="Thu Sep 14 2017" />
        <List description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </div>
    );
  }
}

export default StaticList;
