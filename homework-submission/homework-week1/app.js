const TodoItems = ({ toDoList, removeItem }) => {
  const length = toDoList.length;
  const ListItems = length ? (
    toDoList.map(({ id, description, deadline, done }) => {
      return (
        <li key={id} className={done === true ? 'true' : ''}>
          {description} {deadline} {done}
          <span className="delete" onClick={() => removeItem(id)}>
            DELETE
          </span>
        </li>
      );
    })
  ) : (
    <p>There is no items</p>
  );

  return <ul className="todo-items">{ListItems}</ul>;
};

class AddItems extends React.Component {
  state = {
    description: '',
    deadline: '',
  };

  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  myFunction() {
    let element = document.getElementById('error');
    element.classList.remove('hidde');
  }

  handelSubmit = e => {
    e.preventDefault();
    if (e.target['description'].value !== '' && e.target['deadline'].value !== '') {
      this.props.addItem(this.state);
      this.setState({
        description: '',
        deadline: '',
      });
    } else {
      // console.log('There is empty filed');
      // alert('All fields are required');
      this.myFunction();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>Description: </label>
          <input
            type="text"
            id="description"
            value={this.state.description}
            placeholder="Enter a short description here..."
            onChange={this.handelChange}
          />

          <label>Deadline: </label>
          <input
            type="date"
            id="deadline"
            placeholder="Enter deadline..."
            value={this.state.deadline}
            onChange={this.handelChange}
          />
          <input type="submit" value="Add" className="add" />
        </form>
      </div>
    );
  }
}

// i am testing
function errorMessage() {
  return {
    // error component function
  };
}

class App extends React.Component {
  state = {
    toDoList: [
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

  removeItem = id => {
    const toDoList = this.state.toDoList.filter(item => {
      return item.id !== id;
    });
    this.setState({ toDoList });
  };

  addItem = item => {
    const random = Math.random(Math.random() * 9999);
    item.id = random;
    let items = this.state.toDoList;
    items.push(item);
    this.setState({ items });
  };

  hidde = () => {
    let ele = document.getElementById('error');
    ele.classList.add('hidde');
  };

  render() {
    return (
      <div>
        <h2>To Do App</h2>
        <AddItems addItem={this.addItem} />
        <h2>To Do List</h2>

        <TodoItems toDoList={this.state.toDoList} removeItem={this.removeItem} />
        <div className="error hidde" id="error">
          <div className="message_box ">
            <p>
              All fields are required please insert all fields{'  '}
              <i class="fa fa-exclamation-triangle" />
            </p>
            <button className="ok" onClick={this.hidde}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
