import React, { Component } from 'react';
import './styles1.css';

class TodoItem extends Component {
  render() {
    const { description, deadline, done } = this.props;
    return (
      <li className={done ? 'done' : ''}>
        {description}, {deadline}
      </li>
    );
  }
}

class StaticList extends Component {
  render() {
    return (
      <div className="static_list">
        <h1>Static List</h1>
        <ul>
          <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
      </div>
    );
  }
}

class DynamicList extends Component {
  render() {
    const todoItems = [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ];
    return (
      <div className="dynamic_list">
        <h1>Dynamic List</h1>
        <ul>
          {todoItems.map(({ id, description, deadline, done }) => (
            <TodoItem key={id} description={description} deadline={deadline} done={done} />
          ))}
        </ul>
      </div>
    );
  }
}

class Week1 extends Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}
export default Week1;
