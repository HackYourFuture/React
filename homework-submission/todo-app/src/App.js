import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todoitems from './components/Todoitems';
import Todolist from "./components/Todolist.json";

class App extends Component {
  state = {data : Todolist};

  checkHandler = (item)=> {
    item.done = !item.done;
    this.setState({ data : this.state.data})
  }
    
  render() {
    const listItem = this.state.data.map((item,i)=>
            <li key={"item_"+i} >
            <input type="checkbox"
            onClick={this.checkHandler.bind(null,item)}
            defaultChecked={item.done} className="check-item"/> 
            <label className="list-item">
            {item.description} , {new Date(item.deadline).toDateString()}
            </label>
            </li>
            );
    return (
      <div className="App">
        <Header className="App-header" title="To Do List" />
        <Todoitems id="todo-items" todo={listItem}/>
        {(listItem.length === 0) ? <h2>No items...</h2> : null}
      </div>
    );
  }
}

export default App;
