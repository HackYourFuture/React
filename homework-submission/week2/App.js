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

const Button = ({ text, onClick, id }) => {
  return <input id={id} type="submit" value={text} onClick={onClick} />;
};

//the goal of this component is to dynamically render todoList using map() function:
class DynamicList extends React.Component {
  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul>
        {items.map((item, index) => (
          <div key={index} className="item-wrapper">
            <Item description={item.description} deadline={item.deadline} done={item.done} />
            <Button id={item.id} type="button" text="Delete" onClick={deleteItem} />
          </div>
        ))}
      </ul>
    );
  }
}

const UserInput = ({ addItem }) => {
  return (
    <form onSubmit={addItem}>
      <input type="text" name="description" placeholder="Insert description" />
      <input type="date" name="date" />
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

  deleteItem = event => {
    console.log(event.target);
    event.preventDefault();
    const todoList = this.state.todoList.filter(item => {
      return item.id !== parseInt(event.target.id);
    });
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="panel">
        <UserInput addItem={this.addItem}/>
        <DynamicList items={this.state.todoList} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
// I tell ReactDOM to render the content of <App/> component in the root.
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);
