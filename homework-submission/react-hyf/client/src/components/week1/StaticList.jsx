import React, { Component } from 'react';

class StaticList extends Component {
  state = {
    todos: [
      {
        id: 1,
        desc: 'do first todo.',
        done: true,
      },
      {
        id: 2,
        desc: 'do second todo.',
        done: false,
      },
      {
        id: 3,
        desc: 'do third todo.',
        done: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <ul>
          <li>{this.state.todos[0].desc}</li>
          <li>{this.state.todos[1].desc}</li>
          <li>{this.state.todos[2].desc}</li>
        </ul>
      </div>
    );
  }
}

export default StaticList;
