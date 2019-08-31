// Creates a todo list item
// Accepts the following props:
// - description: the content of the todo item
// - deadline: the date before which the todo item has to be done
// - done: if the todo item is done or not, add a line-through if true
class TodoItem extends React.Component {
  render() {
    const { description, deadline, done } = this.props;
    return (
      <li className={done ? 'done' : ''}>
        {description}, {deadline}
      </li>
    );
  }
}
// Returns a todo list with three todo items components
class StaticList extends React.Component {
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

// Returns unordered list that cntains as many todo items as you want
class DynamicList extends React.Component {
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

// Render the StaticList & DynamicList
class App extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}

// App is a class component which renders the other components in React.
const root = document.getElementById('root');

ReactDOM.render(<App />, root);
