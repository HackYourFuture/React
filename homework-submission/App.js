const path = '/data.json';

const ListItem = ({ id, description, deadline, className }) => {
  return (
    <li className={className}>
      Todo List Number: {id} Description: {description} Deadline: {deadline}
    </li>
  );
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    readFile(path).then(response => {
      this.setState(() => ({
        todos: response,
      }));
    });
  }

  render() {
    const todos = this.state.todos;
    const NewTodo = {
      id: 0,
      description: '',
      deadline: '',
      done: false,
    };
    let TodoNumber = 0;

    return (
      <div>
        <h2>TodoLists</h2>
        <ul>
          {todos.map(({ id, description, deadline, done }, i) => (
            <ListItem
              id={id}
              description={description}
              deadline={deadline}
              className={done === true ? 'strike_through' : ''}
              key={i}
            />
          ))}
        </ul>
        <form>
          <input
            type="text"
            name="todo_description"
            placeholder="Give a description"
            onChange={event => {
              NewTodo.description = event.target.value;
            }}
          />
          <input
            type="text"
            name="todo_deadline"
            placeholder="Give a deadline"
            onChange={event => {
              NewTodo.deadline = event.target.value;
            }}
          />
          <input
            type="submit"
            value="Add"
            onClick={event => {
              event.preventDefault();
              NewTodo.id = todos.length + 1;
              todos.push(NewTodo);
              this.setState({
                todos: todos,
              });
            }}
          />
          <input
            type="id"
            name="todo_id"
            placeholder="Number to delete todo"
            onChange={event => {
              TodoNumber = event.target.value;
            }}
          />
          <input
            type="submit"
            value="Delete"
            onClick={event => {
              event.preventDefault();
              const index = TodoNumber - 1;
              const MarkedTodo = this.state.todos[index];
              MarkedTodo.done = true;
              this.setState({ ...this.state });
            }}
          />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
