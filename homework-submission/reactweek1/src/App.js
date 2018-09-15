import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.changeToDone = this.changeToDone.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.deadLineHandler = this.deadLineHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      list: [
        {
          id: 1,
          description: "Get out of bed",
          deadLine: "2017-09-11",
          done: true
        },
        {
          id: 2,
          description: "Brush teeth",
          deadLine: "2017-09-10",
          done: false
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadLine: "2017-09-09",
          done: false
        }
      ],
      newDescription: "",
      newDeadline: ""
    };
  }

  changeToDone = event => {
    const id = event.target.id;
    const listCopy = [...this.state.list];
    const itemIndex = listCopy.findIndex(el => {
      return el.id === Number(id);
    });
    listCopy[itemIndex].done = !listCopy[itemIndex].done;
    this.setState({
      list: listCopy
    });
  };

  descriptionHandler = newDescription => {
    this.setState({
      newDescription
    });
  };

  deadLineHandler = newDeadLine => {
    this.setState({
      newDeadLine
    });
  };

  addHandler = () => {
    const state = this.state;
    const newItem = {
      id : this.state.list.length + 1,
      description: this.state.newDescription,
      deadLine: this.state.newDeadLine,
      done: false
    };
    this.setState({
      list: [...state.list, newItem],
      newDeadLine: '',
      newDescription: ''
    });
  };

  removeHandler = id => {
    let state = this.state;
    const updatedList = state.list.filter(prop => prop.id !== id);
    this.setState({ list: updatedList });
  };

  itemHandler() {
    if (this.state.list.length === 0) return <p>No items... </p>;

    return (
      <div>
        <ol>
          {this.state.list.map((el, i) => {
            return (
                <li className="todoList" key={i}>
                  <button onClick={() => this.removeHandler(el.id)}>
                    Remove
                  </button>
                  <input id={el.id} type="checkbox" onChange={this.changeToDone} defaultChecked={el.done} />
                  <span style={{ textDecoration: el.done ? "line-through" : null }}>
                    {el.description} - {el.deadLine}
                  </span>
                </li>)
          })}
        </ol>
        <label>
          Enter description :
          <input
            type="text"
            onChange={e => this.descriptionHandler(e.target.value)}
            value={this.state.list.newDescription}
          />
        </label>
        <fieldset>
          <legend>Choose your date</legend>
          <div>
            <input
              type="date"
              min="2018-01-01"
              onChange={e => this.deadLineHandler(e.target.value)}
            />
          </div>
        </fieldset>
        <button onClick={() => this.addHandler()}>Add</button>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://chosencalled.files.wordpress.com/2015/07/sharp-res-28.jpg?w=1024&h=1024"
            className="todo-logo"
            alt="TodoList-logo"
          />
          <h1 className="App-title">To Do List</h1>
        </header>
        <br />
        {this.itemHandler()}
      </div>
    );
  }
}

export default App;
