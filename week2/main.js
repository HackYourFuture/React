const ListItem = props => {
  const { description, deadline } = props;
  return (
    <div>
      {description}, {deadline}
    </div>
  );
};

const DynamicList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <div key={todo.id} className={`${todo.done}`}>
            <ListItem description={todo.description} deadline={todo.deadline} />
            <button
              className="delete"
              onClick={() => {
                props.handleDelete(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);

    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            name="taskInput"
            type="text"
            placeholder="Input a task..."
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button className="submit" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

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
  addItem = (item, deadline) => {
    const newItem = {
      id: this.state.todos.length + 1,
      description: item,
      deadline: deadline,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  handleDelete = item => {
    const updatedItems = this.state.todos.filter(todo => {
      if (todo.id === item) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      todos: updatedItems,
    });
  };

  render() {
    return (
      <div className="list-items">
        <h1 className="title">Dynamic List</h1>
        <DynamicList todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddItem onSubmit={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
