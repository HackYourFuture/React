import React, { Component } from 'react';
import StaticHeader from './week1-components/StaticHeader';
import List from './week1-components/List';

class StaticToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        <StaticHeader />
        <List />
      </React.Fragment>
    );
  }
}

export default StaticToDoList;
