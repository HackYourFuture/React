import React, { Component } from 'react';

export class TodosApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        todo: 'Get out of bed',
        deadline: 'Wed Sep 13 2017',
        done: false,
      },
      {
        id: 2,
        todo: 'Brush teeth',
        deadline: 'Thu Sep 14 2017',
        done: false,
      },
      {
        id: 3,
        todo: 'Eat breakfast',
        deadline: 'Fri Sep 15 2017',
        done: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#ccc' }}>
          <ListHeader header={'Static Todo List'} />
          <StaticTodo todo={'Get out of bed'} deadline={'Wed Sep 13 2017'} />
          <StaticTodo todo={'Brush teeth'} deadline={'Thu Sep 14 2017'} />
          <StaticTodo todo={'Eat breakfast'} deadline={'Fri Sep 15 2017'} />
        </div>
        <div style={{ backgroundColor: '#333', color: '#eee' }}>
          <ListHeader header={'Dynamic Todo List'} />
          <DynamicTodos key={this.props.id} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

// ListHeadre Component for each list title
export class ListHeader extends Component {
  render() {
    return <h2>{this.props.header}</h2>;
  }
}

// StaticTodo Component to fill the static todo list one by one.
export class StaticTodo extends Component {
  render() {
    const { todo, deadline } = this.props;
    return (
      <div>
        <ul>
          <li>{`${todo}, ${deadline}.`}</li>
        </ul>
      </div>
    );
  }
}

// DynamicTodos Component to fill the list with all the items dynamically
export class DynamicTodos extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        {todos.map(todo => (
          <ul key={todo.id}>
            <li>{`${todo.todo}, ${todo.deadline}.`}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default TodosApp;
