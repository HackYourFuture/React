const List = ({ description, deadline, className, removeFromState }) => {
  return (
    <li className={className} onClick={removeFromState}>
      {description}, {deadline}
    </li>
  );
};

const UnorderedDynamicList = ({ todos, removeFromState }) => {
  const processTodos = todos.map(todo => (
    <List
      description={todo.description}
      deadline={todo.deadline}
      key={todo.id}
      className={todo.done ? 'finished' : ''}
      removeFromState={() => {
        removeFromState(todo.id);
      }}
    />
  ));

  return <ul>{processTodos}</ul>;
};

class DynamicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
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
      newItem: {
        id: '',
        description: 'Description',
        deadline: 'nn',
        done: false,
      },
    };
  }

  NewListItemDescription = () => {
    return (
      <p>
        <label htmlFor="">Description</label>
        <input
          type="text"
          onChange={event => {
            const inputValue = event.target.value;

            this.setState({
              newItem: { ...this.state.newItem, description: inputValue, id: Date.now() },
            });
          }}
        />
      </p>
    );
  };

  NewListItemDeadline = () => {
    return (
      <p>
        <label htmlFor="">Deadline</label>
        <input
          type="datetime-local"
          onChange={event => {
            const inputValue = event.target.value;

            this.setState({
              newItem: { ...this.state.newItem, deadline: inputValue, id: Date.now() },
            });
          }}
        />
      </p>
    );
  };

  addToState = () => {
    this.setState({
      toDos: [...this.state.toDos, this.state.newItem],
    });
  };

  removeFromState = id => {
    const newTodos = this.state.toDos.filter(todo => id !== todo.id);
    this.setState({
      toDos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        <UnorderedDynamicList todos={this.state.toDos} removeFromState={this.removeFromState} />
        <this.NewListItemDescription />
        <this.NewListItemDeadline />
        <button onClick={this.addToState}>Add</button>
      </div>
    );
  }
}

const inject = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(
  <div>
    <DynamicList />
  </div>,
  inject,
);
