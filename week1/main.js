// This is a class based component that has two props that are reuseable
// as demonstrated in lines 64 through 66.
class ListItem extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <div>
        {description}, {deadline}
      </div>
    );
  }
}

// This component dynamically renders a list of todos to the DOM
class DynamicList extends React.Component {
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
      <div>
        {this.state.todos.map(todo => {
          return (
            <div key={todo.id} className={`${todo.done}`}>
              <ListItem description={todo.description} deadline={todo.deadline} />
            </div>
          );
        })}
      </div>
    );
  }
}

class StaticList extends React.Component {
  render() {
    return (
      <div>
        <ListItem description="Get out of bed" deadline="2017-09-13" />
        <ListItem description="Brush teeth" deadline="2017-09-14" />
        <ListItem description="Eat Breakfast" deadline="2017-09-15" />
        <ListItem description="Doing homework" deadline="2019-08-17" />
      </div>
    );
  }
}

// This is the parent component that renders both the ListItem and the DynamicList to the DOM.
class App extends React.Component {
  render() {
    return (
      <div className="list-items">
        <h1 className="title">Static List</h1>
        <StaticList />
        <h1 className="title">Dynamic List</h1>
        <DynamicList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
