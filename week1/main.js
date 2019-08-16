// This is a class based component that has two props that are reuseable
// as demonstrated in lines 47 through 49.
class ListItems extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <div>
        {description}, {deadline}
      </div>
    );
  }
}

// This component serves as parent component which renders the component
// being nested in it.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-13',
          done: true,
        },
        {
          id: 2,
          description: 'Brush teeth',
          deadline: '2017-09-14',
          done: false,
        },
        {
          id: 3,
          description: 'Eat Breakfast',
          deadline: '2017-09-15',
          done: false,
        },
      ],
    };
  }
  render() {
    return (
      <div className="list-items">
        <h1 className="title">Static List</h1>
        <ListItems description="Get out of bed" deadline="2017-09-13" />
        <ListItems description="Brush teeth" deadline="2017-09-14" />
        <ListItems description="Eat Breakfast" deadline="2017-09-15" />
        <ListItems description="Doing homework" deadline="2019-08-17" />
        <ListItems description="Respond to feedback" deadline="2019-08-21" />
        <ListItems description="Attend class after holiday" deadline="2019-09-01" />
        <h1 className="title">App List</h1>
        {this.state.todos.map(todo => {
          return (
            <div key={todo.id} className={`${todo.done}`}>
              <ListItems description={todo.description} deadline={todo.deadline} />
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
