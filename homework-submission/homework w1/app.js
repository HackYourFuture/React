const ListItem = ({ description, deadLine, done }) => {
  return <li className={done}>{description + ', ' + deadLine}</li>;
};

const Button = ({ text, type, event }) => {
  return (
    <button type={type} onClick={event}>
      {text}
    </button>
  );
};

class App extends React.Component {
  state = {
    toDoList: [
      {
        id: 1,
        description: 'Get out of bed',
        deadLine: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadLine: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadLine: '2017-09-09',
        done: false,
      },
    ],
    description: '',
    deadLine: '',
    toRemove: null,
  };

  inputChanged(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  addToList(event) {
    event.preventDefault();
    const newTodoList = {
      description: this.state.description,
      deadLine: this.state.deadLine,
      done: false,
    };
    let array = this.state.toDoList;
    array.push(newTodoList);

    this.setState({
      toDoList: array,
    });
  }

  removeFromList(e, index) {
    e.preventDefault();
    const id = this.state.toRemove - 1;
    let array = this.state.toDoList;
    console.log(id);

    let newArray = array.filter((toRemove, index) => {
      return index !== id;
    });
    console.log(newArray);
    this.setState({
      toDoList: newArray,
    });
  }
  render() {
    return (
      <div className="panel">
        <form onSubmit={this.addToList}>
          <input
            type="text"
            name="description"
            onChange={this.inputChanged.bind(this)}
            placeholder="Add new To do"
          ></input>
          <input type="date" name="deadLine" onChange={this.inputChanged.bind(this)}></input>
          <Button type="submit" text="add to list" event={this.addToList.bind(this)} />
          <br />
          <input
            type="number"
            name="toRemove"
            onChange={this.inputChanged.bind(this)}
            placeholder="number of item to delete"
          ></input>
          <Button type="submit" text="remove from list" event={this.removeFromList.bind(this)} />
        </form>
        <h2>Dynamic list</h2>
        <ol>
          {this.state.toDoList.map((item, i) => {
            return (
              <ListItem
                description={item.description}
                deadLine={item.deadLine}
                key={i}
                done={item.done === true ? 'done' : 'not-done'}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);
