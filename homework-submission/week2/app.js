class TodoListItem extends React.Component {
  render() {
    const { id, description, deadline, done, ClickHandler } = this.props;
    return (
      <li key={id} className={done ? 'done' : ''} onClick={ClickHandler}>
        {description}, {deadline}
      </li>
    );
  }
}

const DynamicList = ({ listArray, removeTodoItem }) => {
  return (
    <div className="dynamic_list">
      <h1>Dynamic List</h1>
      <ul>
        {listArray.map(listItem => {
          return (
            <TodoListItem
              key={listItem.id}
              onClick={removeTodoItem}
              description={listItem.description}
              deadline={listItem.deadline}
              done={listItem.done}
            />
          );
        })}
      </ul>
    </div>
  );
};

const TodoItemForm = ({ addingTodo }) => {
  return (
    <form className="form" onSubmit={addingTodo}>
      <input className="input" type="text" name="id" placeholder="ID" />
      <input className="input" type="text" name="description" placeholder="Description" />
      <input className="input" type="text" name="deadline" placeholder="Deadline" />
      <input className="input" type="text" name="done" placeholder="Done" />
      <button className="button" type="submit">
        Add New Todo Item
      </button>
    </form>
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
  };

  addTodoItem(event) {
    event.preventDefault();
    const newTodo = {
      id: event.target.id.value,
      description: event.target.description.value,
      date: event.target.deadline.value,
      done: event.target.done.value,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  }

  removeTodoItem(event) {
    const removedItemId = event.target.id;
    this.setState({ todoList: [...this.state.todoList].filter(item => item.id !== removedItemId) });
  }

  render() {
    return (
      <div className="main">
        <TodoItemForm addingTodo={this.addTodoItem.bind(this)} />
        <DynamicList
          listArray={this.state.todoList}
          clickHandler={this.removeTodoItem.bind(this)}
        />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
