'use strict';

/**
 * A function component that inserts a static item in a list
 * @param {props} param0 The destructured properties description and deadline
 * @return List item with the values of the properties
 */
const StaticTodoItem = ({ description, deadline }) => {
  return (
    <li>
      <h3>{description}</h3>
      <span>{deadline}</span>
    </li>
  );
};

/**
 * A function component that inserts a dynamic item in a list
 * @param {props} param0 The array of todoItems
 * @return List item with the values of the todoItems of the array if todoItem is not done yet (false)
 * @return List item with the values of the todoItems of the array if todoItem is done (true)
 * @return The dynamic list of todoItems
 */
const DynamicTodoItem = ({ todoItems }) => {
  const items = todoItems.map(({ id, description, deadline, done }) => {
    if (!done) {
      return (
        <li key={id}>
          <h3>{description}</h3>
          <span>{deadline}</span>
        </li>
      );
    }
    return (
      <li className="todo-item-done" key={id}>
        <h3>{description}</h3>
        <span>{deadline}</span>
      </li>
    );
  });
  return <ul>{items}</ul>;
};

/**
 * A class component that contains the static and the dynamic items, every one of them in its own list
 * @return Here is the return of the static and dynamic lists
 */
class TodoList extends React.Component {
  state = {
    todoItems: [
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
  render() {
    return (
      <div>
        <h2 className="sub-header">Static List:</h2>
        <ul>
          <StaticTodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <StaticTodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <StaticTodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
        <h2 className="sub-header">Dynamic List:</h2>
        <DynamicTodoItem todoItems={this.state.todoItems} />
      </div>
    );
  }
}

/**
 * This class component is the container of the Todo List application
 * @return Here is the return of the application
 */
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">Todo Lists</h1>
        <TodoList />
      </div>
    );
  }
}

const rootElement = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, rootElement);
