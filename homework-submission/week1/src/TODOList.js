import React, { Component } from 'react';
import Content from './Content';

class TODOList extends Component {
  state = {
    list: [{
      todoDescription: " Get out of bed",
      deadline: " Wed Sep 13 2017",
    },
    {
      todoDescription: " Brush teeth",
      deadline: " Thu Sep 14 2017",
    },
    {
      todoDescription: " Eat breakfast",
      deadline: " Fri Sep 15 2017",
    }]
  };

  render() {
    const title = 'My TODO List';
    return (
      <div>
        <h1>{title}</h1>
        {this.state.list.map((element, index) =>
          <Content todoDescription={element.todoDescription} deadline={element.deadline} key={index} />)}
      </div>
    )
  }
}

export default TODOList;