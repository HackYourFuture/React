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
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        },
      ],
      newDescription: '',
      newDeadline: ''
    }
  }

  changeToDone = (event) => {
    const id = event.target.id;
    const listCopy = this.state.list.slice(0);
    const itemIndex = listCopy.findIndex(el => { return el.id === Number(id) });
    listCopy[itemIndex].done = !listCopy[itemIndex].done;
    this.setState({
      list: listCopy
    });
  }
  descriptionHandler = (newDescription) => {
    const state = this.state;
    state['newDescription'] = newDescription;
    this.setState(state)
  };

  deadLineHandler = (newDeadLine) => {
    const state = this.state;
    state['newDeadline'] = newDeadLine;
    this.setState(state)
  };

  addHandler = () => {
    const state = this.state;
    const newItem = {
      'id': this.state.list.length + 1,
      'description': this.state.newDescription,
      'deadline': this.state.newDeadline,
      'done': false
    };
    this.state.list.push(newItem);
    // this.state.newDeadline = '';
    // this.state.newDeadline = ''; commented out these two cus it faces some problem through the test but dont know what the better way is
    this.setState(state)
  };

  removeHandler = (i) => {
    const state = this.state;
    this.state.list.splice(i, 1);
    this.setState(state);
  };

  itemHandler() {
    if (this.state.list.length === 0) return <p>No items... </p>;

    return <div>
      <ul>
        {
          this.state.list.map((el, i) => {
            return <div key={i}>
              <li className='todoList'>
                <button onClick={() => this.removeHandler(i)}>Remove</button>
                <input id={el.id} type="checkbox" onChange={this.changeToDone} defaultChecked={el.done} />
                <span style={{ textDecoration: el.done ? "line-through" : null }}>
                  {el.id} {el.description} - {el.deadline}
                </span>
              </li>
            </div>;
          })
        }
      </ul>
      <label>
        Enter description :
              <input type="text" onChange={(e) => this.descriptionHandler(e.target.value)} value={this.state.list.newDescription} />
      </label>
      <label>
        Enter deadline :
              <input type="text" onChange={(e) => this.deadLineHandler(e.target.value)} value={this.state.list.newDeadline} />
      </label>
      <button onClick={() => this.addHandler()} >Add</button>
    </div>
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
