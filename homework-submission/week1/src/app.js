'use strict';
// This component renders <li> items into <ul> lists
class Todo extends React.Component {
  render() {
    const { todo, isDynamic, toggleDone } = this.props;
    const { id, description, deadline, done } = todo;

    return (
      <li
        onClick={() => {
          if (isDynamic) toggleDone(id - 1);
        }}
        className={done ? 'done' : 'not-done'}
      >
        {description},{deadline}
      </li>
    );
  }
}

//This component creates a static list and displays Todo components
class StaticList extends React.Component {
  render() {
    const { name, isDynamic } = this.props;
    return (
      <ul className="static list">
        <h2>{name}</h2>
        <Todo
          todo={{ id: 1, description: 'Get out of bed', deadline: '13.9.2017', done: false }}
          isDynamic={isDynamic}
        />
        <Todo
          todo={{ id: 2, description: 'Brush teeth', deadline: '14.9.2017', done: false }}
          isDynamic={isDynamic}
        />
        <Todo
          todo={{ id: 3, description: 'Eat breakfast', deadline: '15.9.2017', done: true }}
          isDynamic={isDynamic}
        />
      </ul>
    );
  }
}

//This component creates a dynamic list and displays Todo components
class DynamicList extends React.Component {
  render() {
    const { listItems, toggle, isDynamic } = this.props;
    return (
      <ul className="dynamic list">
        <h2>Dynamic List</h2>
        {listItems.map((todo, index) => (
          <Todo key={index} todo={todo} toggleDone={toggle} isDynamic={isDynamic} />
        ))}
      </ul>
    );
  }
}

//This is the main component of the todo app act as a container
class TodoApp extends React.Component {
  state = {
    dynamicList: [
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

  toggleDone = index => {
    this.state.dynamicList[index].done = !this.state.dynamicList[index].done;
    this.setState(this.state);
  };

  render() {
    return (
      <div id="app">
        <h1>Welcome to Todo App</h1>
        <StaticList name="Static List" toggle={this.toggleDone} isDynamic={false} />
        <DynamicList listItems={this.state.dynamicList} toggle={this.toggleDone} isDynamic={true} />
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');

ReactDOM.render(<TodoApp />, domContainer);
