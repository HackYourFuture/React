import React, { Component } from 'react';
import './App.css';
import list from './list.json';
class App extends Component {
  state = {
    list
  }
  changeToDone= () => {
    this.setState({
     done: true
    });
  }

  itemHandler() {
    if (this.state.list.length === 0) return <p>No items... </p>;

    return <ul>
      {
        list.map((list, i) => {
          return <div key={i}>
            <li>
              <input type="checkbox" onChange={this.changeToDone.bind(this)} defaultChecked={list.done} /> <span style={{ textDecoration: list.done ? "line-through" : "normal" }}>
                {list.id} - {list.description} - {list.deadline} 
              </span>
            </li>
          </div>;
        })
      }
    </ul>
  }
  render() {
    console.log('this.list= ', this.state.list)
    return(
    <div className="App">
      <header className="App-header">
        <img src="https://chosencalled.files.wordpress.com/2015/07/sharp-res-28.jpg?w=1024&h=1024" className ="todo-logo"  alt="TodoList-logo" />
        <h1 className="App-title">To Do List</h1>
      </header>
      <br />
      {this.itemHandler()}
    </div>);
      }
    }
    
    export default App;
