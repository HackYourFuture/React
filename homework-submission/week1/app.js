const Header = props => {
  return <h3 className="text-center text-danger mt-4">{props.title}</h3>;
};

const StaticList = ({ done, description, deadline }) => {
  return (
    <li className="bg-light list-group-item">
      {description}
      {'  ,'}
      {deadline}
    </li>
  );
};

const DynamicList = props => {
  return (
    <li
      className={
        props.done
          ? ' bg-light list-group-item d-flex justify-content-between done'
          : 'bg-light list-group-item d-flex justify-content-between'
      }
    >
      {props.description}
      {'  ,'}
      {props.deadline}
      {props.done}
      <span>
        <input type="checkbox" onChange={props.handleComplete} />
      </span>
    </li>
  );
};

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: false,
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

  handleComplete = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div>
        <div className="container ">
          <Header title="Static List" />
          <ul className="list-group">
            <StaticList description="Get out of bed" deadline="Wed Sep 13 2017" />
            <StaticList description="Brush teeth" deadline="Thu Sep 14 2017" />
            <StaticList description="Eat breakfast" deadline="Fri Sep 15 2017" />
          </ul>
        </div>

        <div className="container ">
          <Header title="Dynamic List" />
          <ul>
            {this.state.todos.map(todo => (
              <DynamicList
                key={todo.id}
                description={todo.description}
                deadline={todo.deadline}
                done={todo.done}
                handleComplete={this.handleComplete.bind(this, todo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
