/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  state = {
    todos: [
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
    ]
  };

  addTodo(e) {
    if (!this.desc.value || !this.date.value) {
      alert('Each field must be filled.\nPlease check your input !');
      e.preventDefault();
    } else {
      const todos = this.state.todos;
      const description = this.desc.value;
      const deadline = this.date.value;
      const lastTodoId = todos[todos.length - 1].id;
      const id = lastTodoId + 1;
      const newTodo = {
        id: id,
        description: description,
        deadline: deadline,
        done: false
      };
      todos.push(newTodo);
      this.setState({ todos });
      e.preventDefault();
    }
  }

  doneUndone = index => {
    const { todos } = this.state;

    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = index => {
    const { todos } = this.state;
    delete todos[index];
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <ListHeader text="Dynamic To-Do List" />
        <form onSubmit={this.addTodo}>
          <label>
            Description: <input type="text" ref={desc => (this.desc = desc)} size="30" />
          </label>
          <label>
            Deadline: <input type="date" ref={date => (this.date = date)} />
          </label>
          <input type="submit" value="Add" />
        </form>
        <ul>
          {todos.map((todo, index) => {
            return (
              <ListItem
                key={index}
                doneHandler={() => this.doneUndone(index)}
                deleteHandler={() => this.deleteTodo(index)}
                description={todo.description}
                deadline={todo.deadline}
                done={todo.done}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

// This component creates a to do item as <li> tag.
function ListItem({ description, deadline, done, doneHandler, deleteHandler }) {
  return (
    <li>
      <p onClick={doneHandler} className={'item-done-' + (done ? 'true' : 'false')}>
        {description}, {deadline}
      </p>
      <div onClick={deleteHandler}>&#10007;</div>
    </li>
  );
}

// This component creates a header as <h1> tag.
const ListHeader = ({ text }) => {
  return <h1 className="header">{text}</h1>;
};

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
