import React, { Component } from 'react';

/* here lies the dynamic list. I first wanted to try to get the todos from the dynamic json list like:

componentDidMount() {
    fetch("../../dynamiclist.json")
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  but I failed miserably and gave up and went with this solution using props. I am bad :(



*/

class TodoListDynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      ],
    };
  }

  renderTodos() {
    const { todos } = this.state;
    return todos.map(todos => (
      <li>
        <p key={todos.id} className={todos.done ? 'todo-item-done' : ''}>
          {todos.description} - <span>{todos.deadline}</span>
        </p>
      </li>
    ));
  }

  render() {
    return (
      <div className="dynamictodos">
        <ul>{this.renderTodos()}</ul>
      </div>
    );
  }
}

export default TodoListDynamic;
