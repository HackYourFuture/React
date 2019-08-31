class TodoItems extends React.Component {
  delete(key) {
    this.props.delete(key);
  }
  createTasks = item => {
    return (
      <li onClick={() => this.delete(item.id)} key={item.id}>
        {item.description} {item.deadline}
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

class TodoList extends React.Component {
  state = {
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
  addItem = event => {
    event.preventDefault();
    if (event.target.value !== '') {
      // console.log(this.state.items);
      const newItem = {
        description: event.target.inputElement.value,
        id: this.state.items[this.state.items.length - 1].id + 1,
        deadline: '',
        done: false,
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      event.target.inputElement.value = '';
      event.target.value = '';
    }
  };
  deleteItem = id => {
    const filteredItems = this.state.items.filter(function(item) {
      return item.id !== id;
    });
    this.setState({
      items: filteredItems,
    });
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" name="inputElement" />
            <Button text="add" />
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));
