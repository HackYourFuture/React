// Create a todo list item as reusable component:
class TodoItem extends React.Component {
  render() {
    const { description, deadline, className } = this.props;
    return (
      <li className={className}>
        {description}, {deadline}
      </li>
    );
  }
}
// Returns a todo list with three todo items components
const StaticList = () => {
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
};

// Returns unordered list that cntains as many todo items as you want
const DynamicList = () => {
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
          <TodoItem
            key={id}
            description={description}
            deadline={deadline}
            className={done ? 'done' : ''}
          />
        ))}
      </ul>
    </div>
  );
};

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
