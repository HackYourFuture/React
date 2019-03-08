import React, { Component } from 'react';
import TodoTable from './TodoTable';

export default class DynamicList extends Component {
  render() {
    return (
      <div>
        <h1>Dynamic To-do List</h1>

        {this.props.todo.map((obj, i) => (
          <div key={obj.description}>
            <button onClick={() => this.props.deleteTodo(i)}>X</button>
            <TodoTable description={obj.description} deadline={obj.deadline} />
          </div>
        ))}
      </div>
    );
  }
}
