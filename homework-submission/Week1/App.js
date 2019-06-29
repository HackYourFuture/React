// creates a todo item as a <li> element with props which consists description, deadline and className
const TodoItem = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      {description}, {deadline}
    </li>
  );
};

// creates a static unordered list by using TodoItem component
const StaticList = () => {
  return (
    <div>
      <h1>Static List</h1>
      <ul>
        <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};

// array of todoItems for Dynamic List
const arrayOfTodoItems = [
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

// creates a dynamic unordered list with using arrayOfTodoItems array via map() method
const DynamicList = () => {
  return (
    <div>
      <h1>Dynamic List</h1>
      <ul>
        {arrayOfTodoItems.map(({ id, description, deadline, done }) => {
          return (
            <TodoItem
              key={id}
              description={description}
              deadline={deadline}
              className={done ? 'done' : 'notdone'}
            />
          );
        })}
      </ul>
    </div>
  );
};

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

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
