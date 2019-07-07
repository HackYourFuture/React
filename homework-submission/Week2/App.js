// creates a todo item as a <li> element with props which consists description, deadline and className
const TodoItem = props => {
  const { description, deadline, className, deleteItem } = props;
  return (
    <li className={className} onClick={deleteItem}>
      {description}, {deadline}
    </li>
  );
};

class App extends React.Component {
  state = {
    todoList: [
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
    ],

    newTodo: {
      id: '',
      description: '',
      deadline: '',
      done: false,
    },
  };

  AddNewTodo = event => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      description: this.state.newTodo.description,
      deadline: this.state.newTodo.deadline,
      done: false,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  DeleteItem = id => {
    const { todoList } = this.state;
    const indexOfItem = todoList.findIndex(elem => elem.id === id);
    todoList.splice(indexOfItem, 1);
    this.setState({ todoList: todoList });
  };

  RenderList = () => {
    return (
      <ul>
        {this.state.todoList.map(props => {
          const { id, description, deadline, done } = props;
          return (
            <TodoItem
              key={id}
              description={description}
              deadline={deadline}
              className={done ? 'done' : 'notdone'}
              deleteItem={() => this.DeleteItem(id)}
            />
          );
        })}
      </ul>
    );
  };

  RenderForm = () => {
    return (
      <form>
        <label>New Todo: </label>
        <input
          type="text"
          name="description"
          value={this.state.newTodo.description}
          onChange={event => {
            const inputValue = event.target.value;
            this.setState({ newTodo: { ...this.state.newTodo, description: inputValue } });
          }}
        />
        <input
          type="date"
          name="deadline"
          value={this.state.newTodo.deadline}
          onChange={event => {
            const inputValue = event.target.value;
            this.setState({ newTodo: { ...this.state.newTodo, deadline: inputValue } });
          }}
        />
        <button type="submit" onClick={this.AddNewTodo}>
          Add New Todo Item
        </button>
      </form>
    );
  };

  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        <this.RenderList />
        <this.RenderForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
