class ListTitle extends React.Component {
  render() {
    const { text } = this.props;
    return <h2 className="list_title">{text}</h2>;
  }
}

class Button extends React.Component {
  render() {
    const { text, clickHandler, id } = this.props;
    return (
      <button type="button" className="button" name={id} onClick={clickHandler}>
        {text}
      </button>
    );
  }
}

class InputForm extends React.Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <form className="form" onSubmit={clickHandler}>
        <input className="input" type="text" name="description" placeholder="Description" />
        <input
          className="input"
          type="date"
          name="deadline"
          required
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        />

        <button type="submit">add</button>
      </form>
    );
  }
}
class ListItem extends React.Component {
  render() {
    const { id, description, deadline, done, clickHandler } = this.props;

    return (
      <li className={`li_style ${done ? 'done' : ''}`}>
        {description} {deadline}
        <Button text="delete" clickHandler={clickHandler} id={id} />
      </li>
    );
  }
}

class DynamicList extends React.Component {
  render() {
    const { todos, clickHandler } = this.props;
    return (
      <ol className="list">
        {todos.map((todo, index) => (
          <ListItem key={index} {...todo} clickHandler={clickHandler} />
        ))}
      </ol>
    );
  }
}

class App extends React.Component {
  state = {
    todoItems: [
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
  };
  addTodo() {
    event.preventDefault();
    //If the state has 0 item, newId is 1, else id of the last element plus 1
    const newId = this.state.todoItems.length
      ? this.state.todoItems[this.state.todoItems.length - 1].id + 1
      : 1;
    const newTodo = {
      id: newId,
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: false,
    };
    console.log(newTodo.date);
    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
  }

  removeTodo() {
    const removedItem = event.target.name;

    this.setState({
      todoItems: [...this.state.todoItems].filter(item => item.id != removedItem),
    });
  }
  render() {
    return (
      <div>
        <ListTitle text="Dynamic List" />
        <DynamicList todos={this.state.todoItems} clickHandler={() => this.removeTodo()} />
        <InputForm clickHandler={() => this.addTodo()} />
      </div>
    );
  }
}
const root = document.getElementById('root');
ReactDOM.render(<App />, root);
