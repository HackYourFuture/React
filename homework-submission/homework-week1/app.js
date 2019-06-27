const TodoItems = ({ toDoList, removeItem }) => {
  let length = toDoList.length;

  // let xxx = 1 > 2 ? 7 : 10;
  // console.log(xxx);
  const ListItems = length ? (
    toDoList.map(({ id, description, deadline, name, age }) => {
      return (
        <div key={id}>
          <span>{name}</span>
          <span>{age}</span>
          <span onClick={() => removeItem(id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <p>there is no items</p>
  );

  return (
    <div>
      <div>
        <span>Name</span>
        <span>age</span>
        <span>action </span>
      </div>
      {ListItems}
    </div>
  );
};

class Add extends React.Component {
  state = {
    name: '',
    age: '',
  };

  handelChange = e => {
    this.state = {
      [e.target.id]: e.target.value,
    };
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.addItem(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" id="name" placeholder="Enter Name" onChange={this.handelChange} />
          <br />
          <input type="number" id="age" placeholder="Enter Age" onChange={this.handelChange} />
          <br />
          {/* <input
            type="text"
            id="Description"
            placeholder="Description"
            onChange={this.handelChange}
          />
          <br />
          <input type="date" id="Deadline" placeholder="Deadline" onChange={this.handelChange} />
          <br />
          <input type="boolean" id="Done" placeholder="Done" onChange={this.handelChange} />
          <br /> */}
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

const Item = ({ id, description, deadline, done }) => {
  // a component has li element and the data which comes from another components(static and dynamic)
  if (done === true) {
    return (
      <li className="true">
        {id} {description} {deadline}
      </li>
    );
  } else {
    return (
      <li>
        {id} {description} {deadline}
      </li>
    );
  }
};

// a component has static data that comes from App class then will be passed to Item component
const DynamicList = ({ data }) => {
  const result = data.map(({ id, done, description, deadline }) => {
    return <Item key={id} id={id} description={description} deadline={deadline} done={done} />;
  });
  return <ul className="dynamic-list">{result}</ul>;
};

// a class component inherits all methods from react component, it works as container for all above components
class App extends React.Component {
  state = {
    toDoList: [
      {
        id: 1,
        name: 'Muhannad',
        age: 29,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        name: 'Hiba',
        age: 28,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        name: 'Razan',
        age: 25,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };

  removeItem = id => {
    let toDoList = this.state.toDoList.filter(item => {
      return item.id !== id;
    });
    // let index = items.findIndex(item => item.id === id);
    // items.splice(index, 1);
    this.setState({ toDoList: toDoList });
  };

  addItem = item => {
    item.id = Math.random();
    let items = this.state.toDoList;
    items.push(item);
    this.setState({ items: items });
  };

  render() {
    return (
      <div>
        <h2>Dynamic List</h2>
        {/* <DynamicList data={this.toDoList} /> */}
        <TodoItems toDoList={this.state.toDoList} removeItem={this.removeItem} />
        <Add addItem={this.addItem} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
