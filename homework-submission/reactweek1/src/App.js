import React, { Component } from 'react';
import './App.css';
import list from './list.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.changeToDone = this.changeToDone.bind(this);
    this.state = {
      list
    }
  }
  changeToDone = (event) => {
    const id = event.target.id;
    const listCopy = this.state.list.slice(0);
    const itemIndex = listCopy.findIndex(el => { return el.id === Number(id) });
    // listCopy[itemIndex].done = !listCopy[itemIndex].done;
    listCopy[itemIndex] = {
      ...listCopy[itemIndex], done: !listCopy[itemIndex].done
    }
    this.setState({
      list: listCopy
    });
  }

  itemHandler() {
    if (this.state.list.length === 0) return <p>No items... </p>;

    return <ul>
      {
        list.map((el, i) => {
          return <li key={i} className="todoList">
              <input id={el.id} type="checkbox" onChange={this.changeToDone} defaultChecked={el.done} /> <span style={{ textDecoration: el.done ? "line-through" : null }}>
                {el.id} - {el.description} - {el.deadline}
              </span>
            </li>;
        })
      }
    </ul>
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://chosencalled.files.wordpress.com/2015/07/sharp-res-28.jpg?w=1024&h=1024" className="todo-logo" alt="TodoList-logo" />
          <h1 className="App-title">To Do List</h1>
        </header>
        <br />
        {this.itemHandler()}
      </div>);
  }
}

export default App;