//the goal of this component is to create a list item
class Item extends React.Component {
  render() {
    const { description, deadline, done, todoId } = this.props;
    return (
      <li key={todoId} className={done ? 'item-list' : ''}>
        {description}, {deadline}
      </li>
    );
  }
}

const Button = ({ text }) => {
  return <input type="submit" value={text} />;
};

//the goal of this component is to dynamically render todoList using map() function:
class DynamicList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map(item => (
            <div>
              <Item
                key={item.id}
                description={item.description}
                deadline={item.deadline}
                done={item.done}
              />
              <Button type="button" text="Delete" />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const UserInput = ({ addItem }) => {
  return (
    <form onSubmit={addItem}>
      <input type="text" name="description" placeholder="Insert description" />
      <input type="date" name="date" min={new Date()} />
      <Button text="Add" />
    </form>
  );
};

// Move your todo items array to the state of your application. This creates a copy of it that we can change.
// - Create a state object with the todo array as initial value
// - Pass the todos array from the state to the components using props
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  addItem = event => {
    event.preventDefault();
    const description = event.target.description.value;
    const deadline = event.target.date.value;
    const todoList = [...this.state.todoList]; //copy the old state array to the new array
    todoList.push({
      id: todoList[todoList.length - 1].id + 1,
      description,
      deadline,
      done: false,
    });
    this.setState({ todoList });
  };

  deleteItem = index => {
    event.preventDefault();
    this.state.todoList.filter(item => {
      return item.id !== index;
    });
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="panel">
        <UserInput addItem={this.addItem} />
        <DynamicList items={this.state.todoList} />
      </div>
    );
  }
}
// I tell ReactDOM to render the content of <App/> component in the root.
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);
