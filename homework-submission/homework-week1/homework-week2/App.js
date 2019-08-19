const ListItem = ({ id, description, deadline, done, clickHandler }) => {
  return (
    <li
      key={id}
      id={id}
      className={done ? 'itemCompleted' : 'itemNotCompleted'}
      onClick={clickHandler}
    >
      {description} , {deadline}
    </li>
  );
};

const DynamicList = ({ List, clickHandler }) => {
  return (
    <div className="list">
      {List.map(item => {
        return (
          <ListItem
            clickHandler={clickHandler}
            key={item.id}
            id={item.id}
            description={item.description}
            deadline={item.deadline}
            done={item.done}
          />
        );
      })}
    </div>
  );
};

const AddingListItem = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="listItem" />
      <button type="submit">Add Item</button>
    </form>
  );
};

class App extends React.Component {
  state = {
    todoList: [
      {
        id: 0,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 1,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 2,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };

  addItem = event => {
    event.preventDefault();
    const list = this.state.todoList;
    const copyList = [...list];
    const value = event.target.listItem.value;
    let idItem = 0;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    if (list.length !== 0) {
      idItem = list[list.length - 1].id + 1;
    }

    copyList.push({
      id: idItem,
      description: value,
      deadline: today,
      done: false,
    });

    this.setState({
      todoList: copyList,
    });
  };

  removeItem = event => {
    const idToRemove = event.target.id;
    const newList = this.state.todoList.filter(item => item.id != idToRemove);
    newList.forEach((item, index) => {
      item.id = index;
    });
    this.setState({ todoList: newList });
  };

  render() {
    return (
      <div className="wrapper">
        <AddingListItem submitHandler={this.addItem} />
        <DynamicList List={this.state.todoList} clickHandler={this.removeItem} />
      </div>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);
