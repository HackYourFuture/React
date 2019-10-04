{
  /* static list */
}
const Header = () => {
  return (
    <header>
      <h3>Todo List</h3>
      <span className="stats">Type:Static</span>
    </header>
  );
};

const TodoItem = props => {
  return (
    <div className="todoItem">
      <span className="todoItem-name">
        {props.description}, {props.deadline}
      </span>
    </div>
  );
};

const App = () => {
  return (
    <div className="todoList">
      <Header />
      {/* todo list */}
      <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
      <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
      <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root1'));

{
  /* dynamic list */
}
const items = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

const Header1 = () => {
  return (
    <header>
      <h3>Todo List</h3>
      <span className="stats">Type:Dynamic</span>
    </header>
  );
};

const TodoItem1 = props => {
  return (
    <div className="todoItem">
      <span className={`todoItem-name ${props.done ? ' line-through' : ''}`}>
        {props.description}, {props.deadline} {props.done}
      </span>
    </div>
  );
};

const App1 = props => {
  return (
    <div className="todoList">
      <Header1 />
      {/* todo item */}
      {props.initialItems.map((item, i) => (
        <TodoItem1
          key={i}
          description={item.description}
          deadline={item.deadline}
          done={item.done}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App1 initialItems={items} />, document.getElementById('root2'));
