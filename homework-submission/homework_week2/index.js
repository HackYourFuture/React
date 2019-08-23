class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.id)} key={item.id}>
        {item.description} {item.deadline}
      </li>
    );
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
const Button = () => {
  return <button type="submit">add</button>;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    if (this.target.value !== '') {
      const newItem = {
        description: this.target.value,
        id: Math.random(),
        deadline: '',
        done: false,
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this.target.value = '';
    }
  }
  deleteItem(id) {
    const filteredItems = this.state.items.filter(function(item) {
      return item.id !== id;
    });
    this.setState({
      items: filteredItems,
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={a => (this.target = a)} placeholder="enter task" />
            <Button />
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.getElementById('root'),
);
