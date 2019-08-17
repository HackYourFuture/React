// create the Header component
class Header extends React.Component {
  render() {
    return <h2 className="header">{this.props.title}</h2>;
  }
}

// create the list items component
class List extends React.Component {
  render() {
    const { description, deadline, completed } = this.props;
    return (
      <div>
        <ul className={"list"}>
          <li className={completed ? "completed" : ""} >
            {this.props.description}, {this.props.deadline}
          </li>
        </ul>
      </div>
    );
  }

}
// create Static list items and Dynamic list items using the previous component ( Header , List)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: 'Wed Sep 13 2017',
          completed: true,
        },
        {
          id: 2,
          description: 'Brush teeth',
          deadline: 'Thu Sep 14 2017',
          completed: false,
        },
        {
          id: 3,
          description: 'Eat breakfast',
          deadline: 'Fri Sep 15 2017',
          completed: false,
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <Header title="Static List" />
        <List description="Get out of bed" deadline="Wed Sep 13 2017" />
        <List description="Brush teeth" deadline="Thu Sep 14 2017" />
        <List description="Eat breakfast" deadline="Fri Sep 15 2017" />

        <Header title="Dynamic List" />
        {this.state.todos.map(todo => {
          return (
            <div key={todo.id}>
              <List description={todo.description} deadline={todo.deadline} completed={todo.completed} />
            </div>
          );
        })}
      </div>
    )
  }
}

// render App component in #thisIsWhereReactIsInjected
ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'))