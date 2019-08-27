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

class DynamicList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <div key={todo.id} className={`${todo.done}`}>
              <ListItem description={todo.description} deadline={todo.deadline} />
              <button
                className="delete"
                onClick={() => {
                  this.props.handleDelete(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

class AddItem extends React.Component {
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="input a task"
            onChange={this.handleChange}
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
  addItem = item => {
    const newItem = {
      id: this.state.todos.length + 1,
      description: item,
      deadline: '',
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
