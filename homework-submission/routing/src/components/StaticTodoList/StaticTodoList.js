import React, { Component } from 'react';

class StaticToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title"> Static ToDo List </h1>
        <ul>
          <li>description: Get out of bed. deadline: Wed Sep 13 2017 .</li>
          <li>description: Brush teeth. deadline: Thu Sep 14 2017 .</li>
          <li>description: Eat breakfast. deadline: Fri Sep 15 2017 .</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StaticToDoList;
