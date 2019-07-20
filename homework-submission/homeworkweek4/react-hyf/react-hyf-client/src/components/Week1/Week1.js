import React, { Component } from 'react';

class TodoStatic extends React.Component {
  render() {
    const { todo } = this.props;
    const { description, deadline, done } = todo;

    return (
      <li className={done ? 'todo done' : 'todo not-done'}>
        {description},{deadline}
      </li>
    );
  }
}

export default class StaticList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Static Todo List</h2>
        <ul className="static list">
          <TodoStatic
            todo={{ id: 1, description: 'Get out of bed', deadline: '13.9.2017', done: false }}
          />
          <TodoStatic
            todo={{ id: 2, description: 'Brush teeth', deadline: '14.9.2017', done: false }}
          />
          <TodoStatic
            todo={{ id: 3, description: 'Eat breakfast', deadline: '15.9.2017', done: true }}
          />
        </ul>
      </React.Fragment>
    );
  }
}
